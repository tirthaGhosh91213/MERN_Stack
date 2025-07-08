
const fs =require('fs');
const path=require('path')
const rootDir=require('../util/path');
const { error } = require('console');
const homeFilePath=path.join(rootDir,'data','homes.json');





module.exports= class Home{
  constructor(houseName,price,rating,location,photoURL){
    this.houseName=houseName;
    this.price=price;
    this.rating=rating;
    this.location=location;
    this.photoURL=photoURL;
  }

  save(callback){
    Home.fetchAll(registerHome=>{
      registerHome.push(this);
      fs.writeFile(homeFilePath,JSON.stringify(registerHome),callback)
    })
   
  }
  static fetchAll(callback){
    fs.readFile(homeFilePath,(err,data)=>{
      if(err){
        callback([]);

      }
      else{
        callback(JSON.parse(data));
      }
    })
  }
}

