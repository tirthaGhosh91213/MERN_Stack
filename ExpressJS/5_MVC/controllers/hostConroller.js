
const Home = require('../models/Home');

exports.getAddhome=(req,res,next)=>{

  res.render('host/add-home',{pageTitle:'Add Home here'});

}

exports.postAddHome=(req,res,next)=>{
  const {houseName,price,rating,location,photoURL} =req.body;
  const newHome=new Home(houseName,price,rating,location,photoURL);
  newHome.save(error ? res.redirect("/"):res.render("home-added",{pageTitle:'Home Hosted'}))
  
  console.log(req.body)
  
  
  res.render('host/afterAddHome',{pageTitle:'home added successfully'});

}