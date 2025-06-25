function hello(name){
console.log('Hello',name)
}

function uppercase(name){
  let captal=name.toUpperCase();
  console.log('Hello',captal)
}
function toUpper(process){
  let studentName=prompt("Enter the name :-")
  process(studentName);
}
toUpper(hello);
toUpper(uppercase)
