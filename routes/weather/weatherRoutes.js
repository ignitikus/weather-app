const express = require('express');
const router = express.Router();

const {
   loginValidation,
   loginValidationFail
} = require('../../lib/loginValidation')

const {
   getMainWeather,
   findCity
} = require('./controllers/weatherController')

router.get('/', loginValidationFail, getMainWeather)
router.get('/city', loginValidationFail, findCity);


module.exports = router;
