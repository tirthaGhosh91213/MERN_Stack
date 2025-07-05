let first =45;
let outer=(outerArg)=>{
  const outerConst=890;
  let inner=(innerArg)=>{
    const innerConst=678;
    console.log(`first :-`,first)
    console.log(`outerArg :-`,outerArg)
    console.log(`outerConst :-`,outerConst)
    console.log(`innerArg :-`,innerArg)
    console.log(`innerConst :-`,innerConst)

  }
  console.log(`1 first :-`,first)
    console.log(`2 outerArg :-`,outerArg)
    console.log(`3 outerConst :-`,outerConst)
return inner;
}
const inner=outer(45);
inner(34);


// let creatClosure=()=>{
//   let count=0;
//   return ()=>++count
// }

let creatClosure=()=>{
  let count=0;
  return ()=>{
    return ++count;
  }
}
let counter =creatClosure();
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

let counter2 =creatClosure();
console.log(counter2())
console.log(counter2())
console.log(counter2())