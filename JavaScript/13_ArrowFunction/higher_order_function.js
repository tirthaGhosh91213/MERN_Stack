

// function that return a function

const creatDouble=()=>{
  const double =function(num){
    return num*num;
  }
  return double;
}

// or 
// creatDouble=()=>{
//   const double =(num) =>{
//     return num*num;
//   }
//   return double;
// }     

// or
// creatDouble=()=>{
//   const double =num => num*num;
//   return double;
// }

// or

// creatDouble=()=>{
//   return num => num*num;
// }



let double=creatDouble();
console.log(double(6));
console.log(creatDouble()(5))