require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const massive = require('massive')
const Auth0Strategy = require('passport-auth0')
const passport = require('passport')
const session = require('express-session')
const corsConfig = {
    origin: true,
    credentials: true
}

app.use(bodyParser.json())
app.use(cors(corsConfig))

massive(process.env.CONNECTION_STRING)
    .then(db => {
        console.log('db set up')
        app.set('db', db)
    }
).catch(error => console.log('this is the error', error))


//session-related stuff
var sess = {
 secret: 'CHANGE THIS SECRET',
 cookie: {},
 resave: false,
 saveUninitialized: true
};

if (app.get('env') === 'production') {
 sess.cookie.secure = true; // serve secure cookies, requires https
}

app.use(session(sess));

//passport-auth0
var strategy = new Auth0Strategy({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL: 'http://localhost:3005/callback'
 },
 function(accessToken, refreshToken, extraParams, profile, done) {
    app.get('db').getUserSession({authid: profile.id}).then(
        user => {
            if(user[0]){
                done(null, {authid: profile.id, id: user[0].id})
            } 
            else {
                app.get('db').createUser({authid: profile.id}).then(
                    user => {
                        done(null, {authid: profile.id, id: user[0].id})
                    }
                )
            }
        }
    )
 }
);

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    console.log(user)
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.post('')

app.get('/login',
  passport.authenticate('auth0', {scope: 'openid email profile'}), function (req, res) {
  res.redirect("/");
});

app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: 'http://localhost:3000/#/' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("http://localhost:3000/#/edit");
  }
);

app.get('/logout', (req, res) =>{
    res.redirect('https://lcurvelo.auth0.com/v2/logout')
})

app.get('/api/users', (req, res) => {
    app.get('db').getUsers().then(response =>{
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.get('/api/user/:username', (req, res) => {
    app.get('db').getUserProfile({username: req.params.username}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.get('/api/images/:username', (req, res) => {
    app.get('db').getUserImages({username: req.params.username}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.get('/api/work/:username', (req, res) => {
    app.get('db').getUserWorkInfo({username: req.params.username}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.get('/api/images', (req, res) => {
    app.get('db').getImages().then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.get('/api/getImagesById/:id', (req, res) => {
    app.get('db').getImagesByID({id: req.user ? req.user.id : req.params.id}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log('getImagesById', error))
})

app.put('/api/addImage',(req, res) => {
    app.get('db').updateImages({artistid: req.user.id, url: req.body.url, description: req.body.description}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log('this is the error', error))
})

app.delete('/api/deleteImage/:id', (req, res) => {
    app.get('db').deleteImage({id: req.params.id}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log('error', error))
})

app.get('/api/getUserById/:id', (req, res) => {
    app.get('db').getUserById({id: req.user ? req.user.id : req.params.id}).then(response => {        
        return res.status(200).send(response)
    }).catch(error => console.log('getUserById', error))
})

app.get('/api/workInfo', (req, res) => {
    app.get('db').getWorkInfo({id: req.user.id}).then(response =>{
        console.log(response)
        return res.status(200).send(response)
    }).catch(error => console.log('workInfo', error))
})

app.put('/api/userInfo', (req, res) =>{
    app.get('db').updateUserInfo({id: req.user.id, ...req.body}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.put('/api/workInfo', (req, res) => {
    app.get('db').updateWorkInfo({artistid: req.user.id,...req.body}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.get('/api/artist', (req, res) => {
    app.get('db').getArtistByRole({role: req.query.role}).then(response =>{
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.listen(3005, () => console.log('server listening on port 3005'))