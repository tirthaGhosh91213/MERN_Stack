const express=require('express')
const app=express();
const userContact=require('./userContact')
const path=require('path')

const homeRouter=require('./homeRouter')
app.use(express.urlencoded())

// app.use((req,res,next)=>{
//   console.log("First middleware ",req.url,req.method);
//   next();
// })

// app.use((req,res,next)=>{
//   console.log("Second middleware ",req.url,req.method);
//   next();
// })



app.use(homeRouter)

app.get(userContact);



app.use(userContact);


app.use((req,res,next)=>{
  res.statusCode=404;
  res.sendFile(path.join(__dirname,"views","pageNot.html"))
})

const PORT=3001;
app.listen(PORT,()=>{
  console.log(`Server running at : http://localhost:${PORT}/`)
});