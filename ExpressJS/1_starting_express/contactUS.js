const express=require('express')
const app=express();

// app.use((req,res,next)=>{
//   console.log("First middleware ",req.url,req.method);
//   next();
// })

// app.use((req,res,next)=>{
//   console.log("Second middleware ",req.url,req.method);
//   next();
// })

// app.use((req,res,next)=>{
//   console.log("Thaird middleware ",req.url,req.method);
//   res.send("<h1>Hey Tirtha </h1>")
// })

app.get("/",(req,res,next)=>{
  console.log("Another middleware ",req.url,req.method);
  res.send(`<h1>This is our home page </h1>
    <a href='/contact-us'>Contact</a>`);
    
})

app.get("/contact-us",(req,res,next)=>{
  console.log("get middleware ",req.url,req.method);
  res.send(`<h1>This is our contact page </h1>
    <form action="/contact-us" method="post" >
  <input type="text " placeholder="Enter Your name" name="name"><br>
  <input type="email" placeholder="Enter Your email " name="email"><br>
  <input type="Submit" value="Submit">
  </form>`);
    
})
app.post("/contact-us",(req,res,next)=>{
  console.log("POST middleware ",req.url,req.method);
  res.send(`<h1>Form is submited</h1>`);
    
})

const PORT=3001;
app.listen(PORT,()=>{
  console.log(`Server running at : http://localhost:${PORT}/`)
});