const express =require('express');

const bodyParser=require('body-parser')

const path =require('path')
const rootDir=require("./util/path")


const app=express();
const {hostRouter}=require('./routers/hostRouter');
const storeRouter=require('./routers/storeRouter');

app.use(express.static(path.join(rootDir,"public")))
app.use(bodyParser.urlencoded())



app.use(hostRouter);
app.use(storeRouter);


app.use((req,res,next)=>{
  console.log("This is my first middle ware :- ",req.url,req.method,req.body);
  next();
})

app.use((req,res,next)=>{
  res.statusCode=404;
  res.sendFile(path.join(rootDir,"views","404.html"));
    res.end();

})


 const PORT =3000;
app.listen(PORT,()=>{
  console.log(`Server running at : http://localhost:${PORT}/`)
});
