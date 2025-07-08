const Home=require("../models/Home");

exports.getAddHome=(req,res,next)=>{
  Home.fetchAll(registerHome=>{
    res.render('user/home-page',{ homes : registerHome ,pageTitle:`Tirtha's airbnb`});
  });

exports.getFavourite=(req,res,next)=>{
     Home.fetchAll(registerHome=>{
    res.render('user/fave',{ homes : registerHome ,pageTitle:`Favurite homes `});
  });
  } 
}