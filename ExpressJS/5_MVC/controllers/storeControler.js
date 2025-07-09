const Home=require("../models/Home");

exports.getAddHome=(req,res,next)=>{
  Home.fetchAll(registerHome=>{
    res.render('user/home-page',{ homes : registerHome ,pageTitle:`Tirtha's airbnb`});
  });
}

exports.getFavourite=(req,res,next)=>{
     Home.fetchAll(registerHome=>{
    res.render('user/favourite',{ homes : registerHome ,pageTitle:`Favurite homes `});
  });
  } 
exports.getBookings=(req,res,next)=>{
     Home.fetchAll(registerHome=>{
    res.render('user/bookings',{ homes : registerHome ,pageTitle:`Bookings homes `});
  });
  } 
