// console.log("Object Equlity")
// let a={firstName:'Tirtha'};
// let b=a;
// let c={firstName:'Tirtha'};
// console.log(a==b);
// console.log(a===b)
// console.log(a==c)
// console.log(a===c)
function jsonEqulity(student1,student2){
  return JSON.stringify(student1)===JSON.stringify(student2);
}
let student1={
  firstName:'Tirtha',
  lastName:'Ghosh',
  age:20,
  address:{
    road:'BC road',
    district:'Bardhaman',
    state:'West Bengal',

  },
  subject:['math','physics','chemistry'],
  feesPaid:true,
}
let student2={
  firstName:'mrittika',
  lastName:'Ghosh',
  age:20,
  address:{
    road:'RLB road',
    district:'Purba Bardhaman',
    state:'West Bengal',

  },
  subject:['math','physics','chemistry'],
  feesPaid:true,
}
console.log(jsonEqulity(student1,student2));