// core module
// const http =require('http');
// external module
const express =require('express');

const bodyParser=require('body-parser')

const fs =require('fs');


// Local Module
// const {handler} = require('./reqHeader');

const app=express()
// adding middleWare

app.use(bodyParser.urlencoded())

app.use((req,res,next)=>{
  console.log("This is my first middle ware :- ",req.url,req.method,req.body);
  next();
})

app.get("/",(req,res,next)=>{
 res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> myntra </title>
</head>
<body>
  <h1>Welcome to my first server </h1>
  <form action="/Buy_Products" method="post">
  <input type="text " placeholder="Enter the name that you have want " name="products">
  <input type="text " placeholder="Enter budget " name="budget">
  <input type="submit">
  </form>

</body>
</html>
  `)
})

app.post("/Buy_Products",(req,res,next)=>{

    console.log(JSON.stringify(req.body))
    fs.writeFile('buy.json',JSON.stringify(req.body),()=>{
       res.statusCode=302;
       res.setHeader('Location','/products');
      res.end();
    });
    
   })

app.get("/Products",(req,res,next)=>{

  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Products list is appear here </h1>
</body>
</html>
    `)

});

app.use((req,res,next)=>{
  res.statusCode=404;
  res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>404 Page not found  </h1>
</body>
</html>
    `);
    res.end();

})


 const PORT =3000;
app.listen(PORT,()=>{
  console.log(`Server running at : http://localhost:${PORT}/`)
});
