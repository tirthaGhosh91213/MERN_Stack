const express = require('express');
const storeController = require('../controllers/storeControler');

const storeRouter = express.Router();

// Routes
storeRouter.get("/", storeController.getAddHome);
storeRouter.get("/favorite-home", storeController.getFavourite);

module.exports = storeRouter;
