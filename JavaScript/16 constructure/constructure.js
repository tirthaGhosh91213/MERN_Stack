let studen1={
  name:'Tirtha',
  dept:'IT',
  rollNo:182,
  email:'ghoshtirtha1234@.com',

}
let student2={
  name:'Mrittika',
  dept:'IT',
  rollNo:183,
  email:'pudughosh567@.com',

}
function Student(name,dept,rollNo,email){
  this.name=name;
  this.dept=dept;
  this.rollNo=rollNo;
  this.email=email;
}
let stuent3=new Student('pudu','IT',182,'ghoshpudu1234@.com')

console.log(studen1)
console.log(student2)
console.log(stuent3)
