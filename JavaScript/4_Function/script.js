function greeting(){
  document.querySelector('.heading').innerHTML=`Good Morning sir !!!`
}

// Return value between 1 to 4 ...
function getRndomChoise(){
  let randomChoise = Math.floor(Math.random()*4+1);
  return randomChoise;
}
let myNumber =getRndomChoise();
document.querySelector('.heading2').innerHTML=`This is the random number ${myNumber}`


// Parameter using
function getSum(num1,num2){
  let sum=num1+num2;
  return sum;
}
let result =getSum(2,5);
document.querySelector('.heading3').innerHTML=`The result is = ${result}`

