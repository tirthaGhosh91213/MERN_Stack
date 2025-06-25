function shallowComp(student1,student2){

  // check  if both are object and not null
  if(typeof student1!=='object'||student1===null||typeof student2!=='object'||student2===null
  ){
    return false;
  }

// compare the length of the properties

  const key1=Object.keys(student1);
  const key2=Object.keys(student2);
  if(key1.length!==key2.length){
    return false
  }


// compare each property value
for(let key of key1){
  if(student1[key]!==student2[key]){
    return false;
  }
}
return true;

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
console.log(shallowComp(student1,student2));
