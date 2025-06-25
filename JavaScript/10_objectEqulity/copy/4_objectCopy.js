let obj={
  a:56,
  b:65,
  c:'Tirtha',
  d:{
    x:98,
    y:78,
  }
}
console.log('obj',obj);
let objCopy=copyMyObject(obj);
console.log('obj copy ',obj);
objCopy.a=100;
objCopy.d.x=123;
console.log('obj',obj)
console.log('obj copy',objCopy)
function copyMyObject(obj){
  let objstring=JSON.stringify(obj);
  let obj2=JSON.parse(objstring)
  return obj2;
}
