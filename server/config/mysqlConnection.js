var mysql = require('mysql');
var __key = require('./__priv.js');

var srv = mysql.createConnection({
  user: 'root',
  password: __key,
  host: 'localhost',
  database: 'pokemon'
});

srv.connect(function (err) {
  if (err) {
    console.log('error' + err.stack);
    return;
  } else {
    console.log('connected as id ' + srv.threadId);
  }
});

module.exports = srv;

// export everything related to sql initialization
