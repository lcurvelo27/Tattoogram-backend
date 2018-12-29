const express = require('express');
const router = express.Router();

module.exports = function(app){
    router.get('/api/homePost', (req, res) => {
        app.get('db').getRandomUser().then(response => {
            const {id, firstname, lastname, profilepicture, about, url} = response[0]
            app.get('db').updateHomePost({
                artistid: id,
                firstname: firstname,
                lastname: lastname,
                profilepicture: profilepicture,
                about: about,
                images: JSON.stringify(url)
            })
            return res.status(200).send('database updated')
        })
        .catch(error => console.log(error))
    });

    router.get('/users', (req, res) => {
        app.get('db').getUsers().then(response =>{
            return res.status(200).send(response)
        }).catch(error => console.log(error))
    })
    
    router.get('/user/:username', (req, res) => {
        app.get('db').getUserProfile({username: req.params.username}).then(response => {
            return res.status(200).send(response)
        }).catch(error => console.log(error))
    })
    
    router.get('/getUserById/:id', (req, res) => {
        app.get('db').getUserById({id: req.user ? req.user.id : req.params.id}).then(response => {        
            return res.status(200).send(response)
        }).catch(error => console.log('getUserById', error))
    })
    
    
    router.get('/artist', (req, res) => {
        app.get('db').getArtistByRole({role: req.query.role}).then(response =>{
            return res.status(200).send(response)
        }).catch(error => console.log(error))
    })
    
    router.get('/getHomePageInfo', (req, res) => {
        app.get('db').getHomePageInfo().then(response => {
            return res.status(200).send(response)
        }).catch(err => console.log(err))
    })
    
    router.get('/postsload', (req, res) => {
        app.get('db').getImagesOffset({offset: req.query.load}).then(response =>{
            return res.status(200).send(response)
        }).catch(error => console.log('error', error))
    })
    
    router.get('/images/:username', (req, res) => {
        app.get('db').getUserImages({username: req.params.username}).then(response => {
            return res.status(200).send(response)
        }).catch(error => console.log(error))
    })
    
    router.get('/work/:username', (req, res) => {
        app.get('db').getUserWorkInfo({username: req.params.username}).then(response => {
            return res.status(200).send(response)
        }).catch(error => console.log(error))
    })
    
    router.get('/images', (req, res) => {
        app.get('db').getImages().then(response => {
            return res.status(200).send(response)
        }).catch(error => console.log(error))
    })
    
    router.get('/getImagesById/:id', (req, res) => {
        app.get('db').getImagesByID({id: req.user ? req.user.id : req.params.id}).then(response => {
            return res.status(200).send(response)
        }).catch(error => console.log('getImagesById', error))
    })
    
    router.get('/workInfo', (req, res) => {
        app.get('db').getWorkInfo({id: req.user.id}).then(response =>{
            return res.status(200).send(response)
        }).catch(error => console.log('workInfo', error))
    })
    
    return router
}


