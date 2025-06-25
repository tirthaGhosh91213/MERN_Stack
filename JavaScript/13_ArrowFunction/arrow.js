// Normal function 

function add1(first,second){
  return first+second;
}
console.log(add1(3,4))

// anonymos function 

const add2=function(first,second){
  return first+second;
}
console.log(add2(4,4))

// arrow function 

const add3=(first ,second)=>{
  return first+second;
}
console.log(add3(9,4))

const  add4=num=>{
  return num *num;

}
console.log(add4(4))

const squre=num =>num*num;
console.log(squre(9))

// squre of a Array
let num=[2,3,4,5,6]
let squre1=num.map(function(num){
  return num*num;
})
console.log(squre1)

let squre3=num.map(num=>num*num);
console.log(squre3)
