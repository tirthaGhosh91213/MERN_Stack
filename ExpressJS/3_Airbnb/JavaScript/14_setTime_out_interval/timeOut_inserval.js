let main=()=>{
let count =0;
let increment =(head)=>console.log(head,++count)
console.log("start")
increment('first');

 let timerId=setTimeout(()=>increment('Timer '),5000)

 console.log("timerId",timerId)
 setTimeout(()=>{clearTimeout(timerId)},6000)

 let intervalId=setInterval(() => increment('interval'), 1000);
 setTimeout(()=>{clearInterval(intervalId)},6000)

console.log("End")
}
main();