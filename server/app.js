// http://bit.ly/29GWf0U
// http://bit.ly/29BIMFv

var express = require('express');
var app = express();
var publicDir = require('path').join(__dirname, '../');

// express knows to serve index.html?
var routey = require('./config/routes.js');

app.use(express.static(publicDir));
require('./config/mongoose')();
require('./config/express').setup(app);
app.use('/api', routey);

app.listen(8081, () => {
  console.log('Listening on 8081');
  console.log(publicDir);
});
