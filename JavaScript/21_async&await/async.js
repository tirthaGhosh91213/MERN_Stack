function hello(){
  return 'Hello world'
}
let str=hello();
console.log(str)
console.log(typeof str)

function nomaste(){
  return new Promise((resolve,reject)=>{
  resolve('Nmaste India')
  });
}
let str2=nomaste();
console.log(str2)
console.log(typeof str2)

async function ola() {
  return 'ola pudu'
}
let str3=ola();
console.log(str3)
console.log(typeof str3)