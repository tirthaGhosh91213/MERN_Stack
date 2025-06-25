function callByValue(num1,num2){
  return num1+=num2;
}
let x=3,y=7
console.log(`${x},${y}`)
let result=callByValue(x,y);
console.log(result)
console.log(`${x},${y}`)