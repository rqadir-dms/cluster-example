/**
 * Author: Rehan Qadir
 * Created At: 8 September 2021
 * Email: r.qadir@dms-ksa.com
 */

const os = require('os')                   // Operating System module for number of cores
const http = require('http')               // Basic HTTP server
const cluster = require('cluster')

const port = 9800
// Number of cores on the system
const cores = os.cpus().length

// To enable clustering effect
 if (cluster.isMaster) {
     console.log(`Master Process ID: ${process.pid}`)
     for (let i = 0; i < cores; i++) cluster.fork()
 } else {
     console.log(`Worker Process ID: ${process.pid}`)
     
     // Create http server and start listening
     http.createServer( (req, res) => {
         let message = `Replied back from worker process with PID: ${process.pid}`
         console.log(message)
         res.write(message)
         res.end()
     }).listen(port, () => {
         console.log('Listening on port:', port)
     })
}

// To disable clustering effect

/*
http.createServer( (req, res) => {
    let message = `Replied back from process with PID: ${process.pid}`
    console.log(message)
    res.write(message)
    res.end()
}).listen(port, () => {
    console.log('Listening on port:', port)
})

*/


