var mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost/pokemon');
  var db = mongoose.connection;

  db.on('error', function (err) {
    console.error('Something went wrong...', err);
  });

  db.once('open', function() {
    console.log('Database is connected');
  });
};

// export everything related to mongoose initialization
// invoke in app.js
