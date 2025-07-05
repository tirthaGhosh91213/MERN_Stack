const http =require('http');
console.log("I am here ")
const requestHandler =(req, res)=>{
  console.log('i am in the request handler ',req.url ,req.method);
  res.setHeader('Contex-Type','text/html')
  if(req.url==="/"){
  res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First Server </title>
</head>
<body>
  <h1>Hey Tirtha this is my first server ❤️</h1>
</body>
</html>
    `)
  }
  else if(req.url==="/products"){
    res.write(`
      <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First coomponent</title>
  </head>
  <body>
    <h1>Here are some product . This all are for Pudu 😘</h1>
  </body>
  </html>
      `)
  }
  else{
    res.write(`
      <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error page </title>
  </head>
  <body>
    <h1>404 Page not found  ☹️</h1>
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
