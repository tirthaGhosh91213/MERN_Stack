const fs =require('fs');
const { URLSearchParams } = require('url');
console.log("I am here ")
const RequestHandler =(req, res)=>{
  console.log('i am in the request handler ',req.url ,req.method );
  res.setHeader('Content-Type','text/html')
  if(req.url==='/'){
  res.write(`
           <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> myntra </title>
</head>
<body>
  <h1>Welcome to my first server </h1>
  <form action="/by-product" method="post">
  <input type="text " placeholder="Enter the nsme that you have want " name="products">
  <input type="text " placeholder="Enter budget " name="budget">
  <input type="submit">
  </form>

</body>
</html>
    `);
    res.end();
    
  }
  else if(req.url==='/by-product'){
   console.log("Form data receive ");
   const arr=[]
   req.on('data',(chunk)=>{
      
      arr.push(chunk);
   })

   req.on('end',()=>{
    const body = Buffer.concat(arr).toString();
    console.log(body)
    const urlparams=new URLSearchParams(body);
    const bodyJson ={};
    for (const [key,value] of urlparams.entries()){
      bodyJson[key]=value;
    } 
    fs.writeFile('buy.txt',JSON.stringify(bodyJson),()=>{
      res.statusCode=302;
       res.setHeader('Location','/');
      return res.end();
    });
    
   })

  
  }
  else if(req.url==='/products'){
    res.write(`
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
      res.end();
  }
  else{
    res.statusCode=302;
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
    <p>You are noot enter a valid url </p>
  </body>
  </html>
      `);
      res.end();
  }
  
}
module.exports={
  handler:RequestHandler
};