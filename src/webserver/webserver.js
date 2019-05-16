'use strict';

//importing express.js
const express =require('express');
const bodyParser = require('body-parser');
const userTable = require('../database/tables/user-table');

//created a webserver
const app = express();
app.use(bodyParser.json());

//get all users
app.get('/users', (req, res, next)=> {
  console.log('get users');
  res.json({});
});


//create one user route
app.post('/users', async (req, res, next)=> {
   console.log('Create one user');
   const data = req.body;
   const user = (await userTable.createRow(data))[0];
  res.json(user);
});

//get one user route
app.get('/users/:id', async (req, res, next)=> {
  console.log('get  one user');
  consolelog(req.params.id);
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



