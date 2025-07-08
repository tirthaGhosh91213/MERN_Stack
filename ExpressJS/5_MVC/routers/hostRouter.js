const express=require('express');
const hostRouter=express.Router();
const hostConroller=require('../controllers/hostConroller')

hostRouter.get("/add-home", hostConroller.getAddhome)



hostRouter.post("/add-home",hostConroller.postAddHome)

exports.hostRouter=hostRouter;
