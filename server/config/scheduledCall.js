const CronJob = require('cron').CronJob
const http = require('http')

const scheduleCall = new CronJob('0 0 * * 1', function(){
    http.get('http://localhost:3005/api/homePost', (response) => {
        console.log('database updated')
    })
}, null, true, 'America/Denver')



module.exports = scheduleCall