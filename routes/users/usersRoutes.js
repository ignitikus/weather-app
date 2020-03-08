var express = require('express');
var router = express.Router();
const cities = require('cities.json');

const {
  login,
  register
} = require('./controllers/usersController')

router.post('/login', login);
router.post('/register', register)

module.exports = router;
