const express=require('express');

const storeControler =require('../controllers/storeControler')

const storeRouter=express.Router();

storeRouter.get("/",storeControler.getAddHome)

module.exports=storeRouter;