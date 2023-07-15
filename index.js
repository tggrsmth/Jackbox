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

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

//This endpoint is for an admin to pull the .csv file containing all users
app.get('/allusers', (req, res)=> {
    res.sendFile(__dirname + '/users.csv')
})

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