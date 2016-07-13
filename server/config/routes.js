var express = require('express');
var router = express.Router();
var UserCtrl = require('../db/userController');

// User Routes
router.post('/users/signup', UserCtrl.signup);
router.post('/users/signin', UserCtrl.signin);
router.get('/users/signout', UserCtrl.signout);

module.exports = router;

// export router to handle anything that goes to `/api`
