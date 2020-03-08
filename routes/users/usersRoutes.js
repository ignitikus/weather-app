var express = require('express');
var router = express.Router();
const cities = require('cities.json');

const {
  login,
  register,
  getProfile
} = require('./controllers/usersController')

const {
  loginValidation,
  loginValidationFail
  } = require('../../lib/loginValidation')

router.get('/profile', loginValidationFail, getProfile)
router.post('/login', login);
router.post('/register', register)

module.exports = router;
