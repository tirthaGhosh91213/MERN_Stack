const outer=document.querySelector('.outer');
const inner=document.querySelector('.inner');

outer.addEventListener('click',()=>{
  console.log("Outer")
},true) //true for capturing phase
inner.addEventListener('click',(Event)=>{
  console.log("inner")
  Event.stopPropagation();
})