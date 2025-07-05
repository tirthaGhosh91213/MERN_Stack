const http =require('http');
const fs =require('fs');
console.log("I am here ")
const requestHandler =(req, res)=>{
  console.log('i am in the request handler ',req.url ,req.method ,req.headers
  );
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
    `)
  }
  else if(req.url==='/by-product'){
   console.log("Form data receive ");
   const arr=[]
   req.on('data',(chunk)=>{
      console.log(chunk)
      arr.push(chunk);
   })

   req.on('end',()=>{
    const body = Buffer.concat(arr).toString();
   console.log(body)
    
   })

   res.statusCode=302;
   fs.writeFileSync('buy.txt','Myntra');
   res.setHeader('Location','/products');
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
  </body>
  </html>
      `)
  }
    res.end();
}
 const serverLisen =http.createServer(requestHandler);
 const PORT =3001;
serverLisen.listen(PORT,()=>{
  console.log(`Server running at : http://localhost:${3001}/`)
});
