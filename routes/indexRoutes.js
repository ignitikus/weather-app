const express = require('express');
const router = express.Router();
const {
  loginValidation,
  loginValidationFail
  } = require('../lib/loginValidation')

const {
  getHome,
  getRegister,
  get403,
  logout
} = require('./users/controllers/usersController')

router.get('/', loginValidation, getHome);
router.get('/register', loginValidation, getRegister);
router.get('/403', loginValidation, get403)
router.get('/logout', logout)

module.exports = router;
