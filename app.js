/**
 * Simple Nodejs-Express server
 * 
 * Code Contributed by:
 * 
 * Team : DevOps
 */
 const express = require('express')
 const app = express()
 var cors = require('cors')

 // Explicitly setting the port to be use
 const port1 = 4488
//  const port = process.env.port;
 
 // Using cors library to enable the HTTP Requests on localhost:4488 from another localhost:xxxx port
 // By default browser blocks request from different ports even if the domain is same
 app.use(cors())
 
 app.get('/', (req, res) => {
   const welcomePage = '<h2> Welcome to Demo Sample App </h2><br><h3>This is app version 1.0.0 </h3>';
   res.setHeader('Content-type','text/html');
   res.send(welcomePage);
 })
 
 
 app.listen(port1, () => {
 
   // ready for listening to the connections
   // Server start notification
   console.log('Output 1 v3');
   console.log(`Local Server listening at http://localhost:${port1} .. Waiting to listen (4).....`);

   setTimeout(function(){ console.log("Port read from configmap - ", process.env.port); }, 180000);

 });