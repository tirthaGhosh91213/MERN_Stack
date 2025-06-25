function divide(a,b){
  if(b===0){
    throw new Error('Vivide by zero')
    
  }
  return a/b;
}
console.log(divide(9,6))
try{
console.log(divide(9,0))
}catch(error){
  console.log("Error occurs")
  console.log(error.message)
}
finally{
  console.log("It is always exiqute")
}
console.log(divide(9,'c'))