const massive = require('massive');

module.exports = function(app){
        massive(process.env.CONNECTION_STRING)
        .then(db => {        
            app.set('db', db)
            const scheduleCall = require('./scheduledCall')
            console.log('db set up')
        }
    ).catch(error => console.log('this is the error', error))
}