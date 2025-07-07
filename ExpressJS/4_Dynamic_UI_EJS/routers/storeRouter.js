const express=require('express');
const { request } = require('http');

const {registerHome}=require("../routers/hostRouter");

const storeRouter=express.Router();


storeRouter.get("/",(req,res,next)=>{
  console.log(registerHome)
  res.render('home-page',{ registerHome : registerHome ,pageTitle:`Tirtha's airbnb`,currentPage: 'home' });
})

module.exports=storeRouter;