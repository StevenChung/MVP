// http://bit.ly/29GWf0U
// http://bit.ly/29BIMFv

var express = require('express');
var app = express();
var publicDir = require('path').join(__dirname, '../');
var routey = require('./config/routes.js');
require('./config/mysqlConnection.js')();

// express knows to serve index.html?

app.use(express.static(publicDir));
// switching to mysql
require('./config/express').setup(app);
app.use('/api', routey);

app.listen(8081, () => {
  console.log('Listening on 8081');
  console.log(publicDir);
});
