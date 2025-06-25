let product={
  company:"HRX",
  productName:"Track Pants",
  size:30,
  'product-item':'polyster',
  price:650,
  Rating:{
    fivrStar:10,
    fourStar:5,
    threeStar:4,
    twoStar:19,
    oneStar:8,
    sowRating:function(){
      let totalRating=this.fivrStar+this.fourStar+this.threeStar+this.twoStar+this.oneStar;
      console.log('Total Rating :-', totalRating)
    }
  }
}

function sowRating(rating){
  let totalRating=rating.fivrStar+rating.fourStar+rating.threeStar+rating.twoStar+rating.oneStar;
  

  let averageRating=(10*rating.fivrStar+5*rating.fourStar+4*rating.threeStar+12*rating.twoStar+10*rating.oneStar)/totalRating;
  console.log('Total Rating :-',totalRating)
  console.log('Total Average :-',averageRating)
}
sowRating(product.Rating)
product.Rating.sowRating()
  