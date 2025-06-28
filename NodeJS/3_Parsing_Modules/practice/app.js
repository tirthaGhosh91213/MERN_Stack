const http=require('http')
const requestHandler =require('./handler')
const calHandle=require('./calculator')
const server =http.createServer(requestHandler,calHandle)
const PORT=3002;
server.listen(PORT,()=>{
  console.log(`Server runnging at the address IS: http://localhost:${PORT}`)
})