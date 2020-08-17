var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256', 'SHA256']
});
const authController = require('../controllers/authentication');
//uses the trips controller we made this module (app_api/controllers/trips.js)
const tripsController = require('../controllers/trips');
//display all trips
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);
//find a specific trip
router 
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);
//Auth
router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

module.exports = router;