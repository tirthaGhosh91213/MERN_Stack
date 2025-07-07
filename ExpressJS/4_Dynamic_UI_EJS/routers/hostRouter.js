
const express=require('express');
const hostRouter=express.Router();



hostRouter.get("/add-home",(req,res,next)=>{

  res.render('add-home',{pageTitle:'Add Home here',currentPage: 'addHome'});

})
const registerHome =[];

hostRouter.post("/add-home",(req,res,next)=>{
  registerHome.push(req.body);
  res.render('afterAddHome',{pageTitle:'Your home i added successfully',currentPage: 'HomeAdded'});
})

exports.hostRouter=hostRouter;
exports.registerHome=registerHome;
