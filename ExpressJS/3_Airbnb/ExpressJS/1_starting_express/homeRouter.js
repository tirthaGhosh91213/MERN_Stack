const express=require('express')
const homeRouter=express.Router();
const path=require('path');

homeRouter.get("/",(req,res,next)=>{
  console.log("Another middleware ",req.url,req.method);
  
  res.sendFile(path.join(__dirname,"views","home.html"));
    
})

module.exports=homeRouter;