localStorage.setItem('Name','Tirtha Ghosh')
let user={
  name:'Tirtha',
  tytle:'Ghosh',
  rollNum:182,
  age:19,
  email:'ghoshtirths1234@.com',
  hobbis:['cricket','drawing']
}
localStorage.setItem('userInfo',JSON.stringify(user))
let userInfostr=localStorage.getItem('userInfo')
console.log(userInfostr)
console.log(typeof userInfostr)
let userinfo2=JSON.parse(userInfostr);
console.log(userinfo2)