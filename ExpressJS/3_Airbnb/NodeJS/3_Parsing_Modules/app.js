// core module
const http =require('http');
// Local Module
const {handler} = require('./reqHeader');


 const serverLisen =http.createServer(handler);
 const PORT =3001;
serverLisen.listen(PORT,()=>{
  console.log(`Server running at : http://localhost:${3001}/`)
});
