function callObject(p,q){
  console.log(`In function : Before swap p :${p.myValue} q :${q.myValue}`)
  let temp=p.myValue;
  p.myValue=q.myValue;
  q.myValue=temp;
  console.log(`In function : After swap p :${p.myValue} q :${q.myValue}`)
}
let obj1={myValue:10}
let obj2={myValue:15}
console.log(`Before call p :${obj1.myValue} q :${obj2.myValue}`)
callObject(obj1,obj2);
console.log(`After call p :${obj1.myValue} q :${obj2.myValue}`)