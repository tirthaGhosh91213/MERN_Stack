

const Favourite = require("./Favourite");

const  airbnbDB =require("../util/database-utill");


module.exports= class Home{
  constructor(houseName,price,rating,location,photoURL,description ){
    this.houseName=houseName;
    this.price=price;
    this.rating=rating;
    this.location=location;
    this.photoURL=photoURL;
    this.description=description;
  
  }

  save(){
    if(this.id){
      return airbnbDB.execute(`UPDATE homes SET houseName=?,price=? , rating=? , location=? , photoURL=?, description=? WHERE id=?`, [this.houseName,this.price,this.rating,this.location,this.photoURL,this.description ,this.id])
    }else{
      return airbnbDB.execute(`INSERT INTO homes (houseName,price,rating,location,photoURL,description) VALUES(?,?,?,?,?,?)`,
        [this.houseName,this.price,this.rating,this.location,this.photoURL,this.description]
       )
    }
    
   
  }
  static fetchAll(){
    return airbnbDB.execute("SELECT * FROM homes");
    
  }

  static findByID(homeID){
    return airbnbDB.execute("SELECT * FROM homes WHERE ID=?", [homeID]);
  }
  static deleteById(homeID){
    return airbnbDB.execute("DELETE FROM homes WHERE ID=?", [homeID]);
  }
}

