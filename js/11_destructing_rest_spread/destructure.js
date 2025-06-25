let rollNo=182;
let student1={
  firstName:'Tirtha',
  lastName:'Ghosh',
  age:20,
  rollNo,
  address:{
    road:'BC road',
    district:'Bardhaman',
    state:'West Bengal',

  },
  subject:['math','physics','chemistry'],
  feesPaid:true,
}
function printName(student){
  // in normal
  // let firstName=student1.firstName;
  // let secondNamme=student1.lastName;

  // in destructing
  let {firstName,lastName,address}=student;
  let {road}=address
  console.log('name :-',firstName,lastName,road)
  let returnResult={firstName,lastName:lastName};
  return returnResult;

}
let result=printName(student1);
console.log(JSON.stringify(result))
