var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var __SALT = require('./__priv.js');
var db = require('../config/mysqlConnection.js');

db.query('select * from users', function(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
  }
});
