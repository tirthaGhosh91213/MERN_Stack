
const Home = require('../models/Home');

exports.getAddhome=(req,res,next)=>{

  res.render('add-home',{pageTitle:'Add Home here'});

}

exports.postAddHome=(req,res,next)=>{
  const {houseName,price,rating,location,photoURL} =req.body;
  const newHome=new Home(houseName,price,rating,location,photoURL);
  newHome.save(error=>{
    if(error){
      res.redirect('/')
    }
    else{
      res.render("home-added",{pageTitle:'Home Hosted'})
    }
  });
  console.log(req.body)
  
  
  res.render('afterAddHome',{pageTitle:'home added successfully'});

}