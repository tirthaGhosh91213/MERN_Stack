const express=require('express');

const storeControler =require('../controllers/storeControler')


const path =require('path')
const storeRouter=express.Router();


storeRouter.get("/",storeControler.getAddHome)

module.exports=storeRouter;