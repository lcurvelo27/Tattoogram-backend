const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const massive = require('massive')

app.use(bodyParser.json())
app.use(cors())

massive(process.env.CONNECTION_STRING)
    .then(db => {
        console.log('db set up')
        app.set('db', db)
    }
).catch(error => console.log(error))

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
    app.get('db').getImagesByID({id: req.params.id}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.get('/api/getUserById/:id', (req, res) => {
    app.get('db').getUserById({id: req.params.id}).then(response => {        
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.get('/api/workInfo/:id', (req, res) => {
    app.get('db').getWorkInfo({id: req.params.id}).then(response =>{
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.put('/api/userInfo', (req, res) =>{
    app.get('db').updateUserInfo({...req.body}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.put('/api/workInfo', (req, res) => {
    app.get('db').updateWorkInfo({...req.body}).then(response => {
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.get('/api/artist', (req, res) => {
    app.get('db').getArtistByRole({role: req.query.role}).then(response =>{
        return res.status(200).send(response)
    }).catch(error => console.log(error))
})

app.listen(3005, () => console.log('listening on port 3005'))