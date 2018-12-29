module.exports = function(app){
    const express = require('express')
    const Auth0Strategy = require('passport-auth0')
    const passport = require('passport')
    const session = require('express-session')
    const router = express.Router()

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
        callbackURL: 'http://localhost:3005/auth/callback'
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
    
    router.get('/login',
        passport.authenticate('auth0', {scope: 'openid email profile'}), function (req, res) {
        res.redirect("/");
    });
    
    router.get('/callback',
        passport.authenticate('auth0', { failureRedirect: 'http://localhost:3000/#/' }),
        function(req, res) {
        if (!req.user) {
            throw new Error('user null');
        }
        res.redirect("http://localhost:3000/#/edit");
        }
    );
    
    router.get('/logout', (req, res) =>{
        res.redirect('https://lcurvelo.auth0.com/v2/logout')
    })

    return router
}