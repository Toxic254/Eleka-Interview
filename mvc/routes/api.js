var express = require('express');
var router = express.Router();

const controller = require('../controllers/api');

// ROUTES
router.route('/api/v1/tours/').get(controller.).post(controller.);

router.route('/api/v1/tours/:id').get(controller.);

module.exports = router;
