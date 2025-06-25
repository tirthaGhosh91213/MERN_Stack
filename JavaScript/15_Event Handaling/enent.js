console.log("Event Handaling")

let buttonHandaling=()=>{
  console.log("Bitton is clicked ")
}

let buttonHandaling2=()=>{
  for(let i=1;i<=5;i++){
  console.log(i)
  }
}

let button =document.getElementById('myButton')

//Event Handaling using onclick ---
// button.onclick=buttonHandaling;
// button.onclick=buttonHandaling2;

//Event Listener---
button.addEventListener('click',buttonHandaling)
button.removeEventListener('click',buttonHandaling)
button.addEventListener('click',buttonHandaling2)

