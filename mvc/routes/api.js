var express = require('express');
var router = express.Router();

const controller = require('../controllers/api');

// ROUTES
router.route('/api/v1/tours/').get(controller.getAllTours).post(controller.createTour);

router.route('/api/v1/tours/:id').get(controller.getSingleTour).patch(controller.patchTour).delete(controller.deleteTour);

module.exports = router;
