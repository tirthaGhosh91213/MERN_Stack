const express=require('express');
const path=require('path');
const userContact=express.Router();



userContact.get("/contact-us",(req,res,next)=>{
  console.log("get middleware ",req.url,req.method);
  res.sendFile(path.join(__dirname,"views","contactUS.html"));

    
})


userContact.post("/contact-us",(req,res,next)=>{
 
  console.log("POST middleware ",req.url,req.method,req.body);
  console.log(req.body)

  res.sendFile(path.join(__dirname, "views", "formSubmited.html"));
    
})

module.exports=userContact;

