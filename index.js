const express = require('express');
const app = express();
const database = require('./services/database.js');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Hello from Express!");
})

app.get('/users', (req, res) => {

  database.getUserInfo(req , res);

});

app.listen(PORT, () => console.log('Listening on ' + PORT));
