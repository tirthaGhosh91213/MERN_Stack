const Home=require("../models/Home");

exports.getAddHome=(req,res,next)=>{
  Home.fetchAll(registerHome=>{
    res.render('home-page',{ homes : registerHome ,pageTitle:`Tirtha's airbnb`});
  });
  
}