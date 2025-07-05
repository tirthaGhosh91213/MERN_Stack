fetch('https://jsonplaceholder.typicode.com/posts')
// .then(Response=>Response.json())
// or
.then(function(Response){
  return Response.json()
})
.then(json=>console.log(json))

async function username() {
  try{
  let responce=await fetch('https://jsonplaceholder.typicode.com/posts')
  let json=await responce.json();
  console.log(json)}catch(error){
    console.log(error.message)
  }
}