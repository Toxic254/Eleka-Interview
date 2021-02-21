var express = require('express');
var router = express.Router();

const controller = require('../controllers/api');

// ROUTES
router.route('/').get(controller.getHomePage).post(controller.postWeatherDetails);


module.exports = router;
