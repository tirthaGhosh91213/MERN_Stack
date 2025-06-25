console.log('Call by value')
let x=10;
let y=x;
console.log(`x :${x}, y : ${y}`)
x=15;
console.log(`x :${x}, y : ${y}`);



console.log('Call by Reference ')
let c={myValue:16};
let d=c;
let e={myValue:16}
console.log(`c : ${c.myValue}, d: ${d.myValue}`);
c.myValue=20
console.log(`c : ${c.myValue}, d: ${d.myValue}`);

console.log(c==d)
console.log(c===d)
console.log(c==e)



