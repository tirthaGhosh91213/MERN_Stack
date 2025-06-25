function learningscope(){
  console.log("I am in Var")
  console.log(x)
  var x=10;
  console.log(x);
  var x=30;
  console.log('x ',x)
  // console.log(y)
  let y=15;
  console.log('y ', y)
  // console.log(z)
  const z=20;
  console.log('z ',z)
}
learningscope();
console.log(x)

// No Keyword
function noKeyWord(){
  global=22;
  console.log(global)
  global=33;
  console.log(global)
}
// noKeyWord();
// console.log(global);