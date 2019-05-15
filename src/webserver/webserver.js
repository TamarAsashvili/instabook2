'use strict';

//importing express.js
const express =require('express');

//created a webserver
const app = express();


//get all users
app.get('/users', (req, res, next)=> {
  console.log('get users');
  res.json({});
});


//create one user route
app.post('/users', (req, res, next)=> {
  console.log('create  onr users');
  res.json({});
});

//get one user route
app.get('/users/:id', (req, res, next)=> {
  console.log('get one user');
  console.log(req.params.id);
  res.json({});
});


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



