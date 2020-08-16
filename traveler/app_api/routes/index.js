var express = require('express');
var router = express.Router();
//uses the trips controller we made this module (app_api/controllers/trips.js)
const tripsController = require('../controllers/trips');
//display all trips
router
    .route('/trips')
    .get(tripsController.tripsList);
//find a specific trip
router 
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;