const express = require('express');
const router = express.Router();

module.exports = function(app) {
    router.put('/userInfo', (req, res) =>{
        app.get('db').updateUserInfo({id: req.user.id, ...req.body}).then(response => {
            return res.status(200).send(response)
        }).catch(error => console.log(error))
    })
    
    router.put('/addImage',(req, res) => {
        app.get('db').updateImages({artistid: req.user.id, url: req.body.url, description: req.body.description}).then(response => {
            return res.status(200).send(response)
        }).catch(error => console.log('this is the error', error))
    })
    
    router.delete('/deleteImage/:id', (req, res) => {
        app.get('db').deleteImage({id: req.params.id}).then(response => {
            return res.status(200).send(response)
        }).catch(error => console.log('error', error))
    })
    
    router.put('/workInfo', (req, res) => {
        app.get('db').updateWorkInfo({artistid: req.user.id,...req.body}).then(response => {
            return res.status(200).send(response)
        }).catch(error => console.log(error))
    })

    return router
}

