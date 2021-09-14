const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/users', function (req, res) {
  let rawdata = fs.readFileSync('users.json');
  let users = JSON.parse(rawdata);
  res.json(users);
});

app.get('/user/:id', function (req, res) {
  let rawdata = fs.readFileSync('users.json');
  let users = JSON.parse(rawdata);
  let user = users.find((user) => {
    return user.id == req.params.id;
  });
  res.json(user);
});

app.listen(5001, () => {
  console.log('Server is up on port 5001');
});
