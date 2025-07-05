const express=require('express');
const storeRouter=express.Router();
const path =require('path')
const rootDir=require("../util/path");
const {registerHome}=require("./hostRouter");


storeRouter.get("/",(req,res,next)=>{
  console.log(registerHome)
  res.sendFile(path.join(rootDir,"views","home-page.html"));
})

module.exports=storeRouter;