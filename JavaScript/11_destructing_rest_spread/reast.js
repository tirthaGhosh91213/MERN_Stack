const {a,c,...baki}={a:2,b:4,c:6,d:9,e:10}
console.log(baki)

const even=[2,4,6,8,10]
let [first,second,...next]=even;
console.log('first:-',first)
console.log('second:-',second)
console.log('baki:-',next)