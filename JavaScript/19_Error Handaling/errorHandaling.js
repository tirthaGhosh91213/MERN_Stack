let pasetojson=(stringJSON)=>{
  try{
    return JSON.parse(stringJSON)
  }catch{
    console.log("Error Occors")
    console.log(error.message);
    return {};
  }
}
obj={
a:1,
b:3,
c:4,
}
let Stringobj=JSON.stringify(obj)
let newObj=pasetojson(Stringobj);
console.log(newObj)

let newobject;
try{
  newobject=pasetojson('{"A:;1"},')
}catch{
  console.log("Error occers")
  // console.log(error.message);
}
console.log(newobject);
console.log("End");