console.log("Learning object")
let product={
  company:"HRX",
  productName:"Track Pants",
  size:30,
  'product-item':'polyster',
  price:650,
  Rating:4.5,
}
console.log(product)
console.log('Dot Notation : ',product.size)
console.log('Bracket Notation : ',product['size'])
let key='company';
console.log(product[key])
console.log(product['product-item'])
console.log(typeof product)

// Modyfing the Object
product.Discount=50,
product.price=600,
console.log('After modyfing : ',product)
delete product.Rating;
console.log('After deleting ',product)