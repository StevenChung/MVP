// http://bit.ly/29GWf0U
// http://bit.ly/29BIMFv

var express = require('express');
var app = express();
var publicDir = require('path').join(__dirname, '../');
require('./config/mongoose')();
require('./config/express').setup(app);

app.use(express.static(publicDir));

app.listen(8081, () => {
  console.log('Listening on 8081');
  console.log(publicDir);
});
