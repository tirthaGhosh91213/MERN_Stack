console.log("Fetch.js")
fetch('https://jsonplaceholder.typicode.com/posts')
// .then(Response=>Response.json())
// or
.then(function(Response){
  return Response.json()
})
.then(data=>console.log(data))