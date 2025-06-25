let arr=[1,2,9,4,56,7,0,5];
let brr={}
console.log('iaArray ',Array.isArray(arr))
console.log('iaArray ',Array.isArray(brr))



console.log(arr)
arr.push(15);
console.log(arr)
arr.pop();
console.log(arr)
arr.sort();
console.log(arr)

let index=arr.indexOf(9);
console.log(index)

// forEach loop by array 
arr.forEach(function(element,index){
  if(index===3)return;
  console.log(element,index)
});


let arrNew =arr.map(function(item){
  return  item*item;
})
let arroldnew=arrNew.filter(function(item){
  return item%2==0;
})
console.log(arr)
console.log(arrNew)
console.log(arroldnew)

