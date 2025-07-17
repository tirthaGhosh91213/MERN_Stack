
const Home = require('./../models/Home');

exports.getAddhome=(req,res,next)=>{

  res.render('host/edit-home',{editing:false,pageTitle:'Add Home here'});

}
exports.getEditHome=(req,res,next)=>{
  const homeID=req.params.homeID;
  const editing =req.query.editing ==='true';
  if(!editing){
    console.log("Eaditing flag is not send properly ");
   return res.redirect("/Host-Homes");
  }

  Home.findByID(homeID).then(([homes])=>{
    const home =homes[0];
    if(!home){
      console.log("Home id is not found ");
      return res.redirect("/Host-Homes");
    }
    console.log(homeID,editing,home)
    res.render('host/edit-home',{ home:home , editing:editing , pageTitle:'Edit Home here'});
  })
}
exports.postDeleteHome=(req,res,next)=>{
  const homeID=req.params.homeID;
 Home.deleteById(homeID).then(()=>{
  res.redirect("/Host-Homes")
 })
 
 
}

exports.postEditHome=(req,res,next)=>{
  const {ID,houseName,price,rating,location,photoURL, description} =req.body;
  const newHome=new Home(houseName,price,rating,location,photoURL,description);
  newHome.id=ID;
  newHome.save().then(()=>{
    res.redirect("/Host-Homes")
  }).catch(error=>{
    console.log("Error in here ",error)
  });
}

exports.getHostHome=(req,res,next)=>{

  Home.fetchAll().then(([registerHome]) =>{
    res.render('host/Host-Homes',{ homes : registerHome ,pageTitle:`Host Homes`});

});
}

exports.postAddHome=(req,res,next)=>{
  const {houseName,price,rating,location,photoURL,description} =req.body;
  const newHome=new Home(houseName,price,rating,location,photoURL,description);
  newHome.save().then(([rows])=>{
    res.render("host/afterAddHome",{pageTitle:'Home Hosted'});
  });
  console.log(req.body)
  
  
  res.render('host/afterAddHome',{pageTitle:'home added successfully'});

}