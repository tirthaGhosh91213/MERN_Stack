// core module
const http =require('http');
// Local Module
const {handler} = require('./reqHeader');


 const serverLisen =http.createServer(handler);
 const PORT =3000;
serverLisen.listen(PORT,()=>{
  console.log(`Server running at : http://localhost:${PORT}/`)
});
