const fs = require('fs');
const bodyParser= require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

//This endpoint is used to generate a user entry form as a home page.
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html')
})

//This endpoint is for an admin to pull the .csv file containing all users.
app.get('/allusers', (req, res)=> {
    res.sendFile(__dirname + '/users.csv')
})

//This endpoint is by the submit code on the user entry form to store data to a .csv.
app.post('/users', (req, res)=> {
  console.log(req.body)
  fs.appendFile('users.csv', req.body.firstname + "," + req.body.lastname + "," + req.body.email + "," + req.body.username + "," + req.body.password + '\r\n', (err) => {
    if (err) throw err;
    console.log('Appended to file!');  
  });
  res.send( 'data appended to .csv' )
})

app.listen(port, () => {
   console.log('Server started on port 3000')
})