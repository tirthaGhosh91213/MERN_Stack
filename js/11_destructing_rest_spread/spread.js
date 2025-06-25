
// spreat in Array

let evan=[2,4,6,8,12]
console.log('evan:-',evan)
let newEvan=[...evan];
newEvan.push(16);

console.log('newEvan:-',newEvan)
console.log('evan',evan)
console.log('length',newEvan.length)

// spreat in object 

let obj={
  a:34,
  b:90,
  hello:'Tirtha',
  address:{
    road:'BC road',
    PIN :713407,
  }
}
let newObj={...obj,d:37}
console.log('object:-',JSON.stringify(obj))
console.log('New object:-',JSON.stringify(newObj))
newObj.b=100;
newObj.address.PIN=700100;
console.log('object:-',JSON.stringify(obj))

console.log('New object:-',JSON.stringify(newObj))




