'use strict';

//importing express.js
const express =require('express');

//created a webserver
const app = express();


//route for "/" path
app.get('/', (req, res, next)=> res.send('Hello from the back-end side'));
//creating a port variable, 
const port = 2337; 

//make web server lister on a port

app.listen(port, err => {
   if (err){
     console.log('this is error')  
     throw err;
   }
   console.log(`Web server listening on http://localhost:${port}/`);
});



