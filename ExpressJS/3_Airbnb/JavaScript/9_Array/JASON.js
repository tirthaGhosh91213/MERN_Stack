let user={
  name:'Tirtha',
  tytle:'Ghosh',
  rollNum:182,
  age:19,
  email:'ghoshtirths1234@.com',
  hobbis:['cricket','drawing']
}
console.log(user)
let userStr=JSON.stringify(user);
console.log(userStr)
console.log( typeof userStr)
let newUser='{"name":"Tirtha","tytle":"Ghosh","rollNum":182,"age":19,"email":"ghoshtirths1234@.com","hobbis":["cricket","drawing"]}'
let myStr=JSON.parse(newUser)
console.log(myStr)
console.log(myStr.rollNum)