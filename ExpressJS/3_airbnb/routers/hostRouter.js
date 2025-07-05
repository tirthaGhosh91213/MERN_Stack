
const express=require('express');
const hostRouter=express.Router();
const path =require('path')
const rootDir=require("../util/path")

hostRouter.get("/add-home",(req,res,next)=>{

  res.sendFile(path.join(rootDir,"views","add-home.html"));

})
const registerHome =[];


hostRouter.post("/add-home",(req,res,next)=>{
  registerHome.push(req.body);
  
  res.sendFile(path.join(rootDir,"views","afterAddHome.html"));

})

exports.hostRouter=hostRouter;
exports.registerHome=registerHome;
