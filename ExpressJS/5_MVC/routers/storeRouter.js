const express = require('express');
const homeController = require('../controllers/storeControler');

const storeRouter = express.Router();

// Routes
storeRouter.get("/", homeController.getAddHome);
storeRouter.get("/favorite-home",homeController.getFavourite);
storeRouter.get("/bookings",homeController.getBookings);

module.exports = storeRouter;
