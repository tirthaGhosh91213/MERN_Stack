let container=document.getElementById("container");
let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let button3=document.getElementById("button3");

function clickHendaling(){
  console.log(this.id)
  this.style.backgroundColor='red'
  this.style.color='white';
}
// clickHendaling();
container.addEventListener('click',clickHendaling)
button1.addEventListener('click',clickHendaling)
button2.addEventListener('click',clickHendaling)
button3.addEventListener('click',clickHendaling)