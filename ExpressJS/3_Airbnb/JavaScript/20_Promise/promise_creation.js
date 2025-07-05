// function getDatafromInternet(succesCallback){
//   console.log("Getting data from Internet");
//   succesCallback('KG Coding')

// }
// getDatafromInternet((data)=>{
//   console.log(`Data is fatched ${data}`);});


function getDatafromInternetUsingPromise(){
  let promise=new Promise((resolve,reject)=>{
    console.log("Getting data from Internet using promise");
    for(let i=0;i<10;i++) console.log(i);
    resolve('KG Coding')
    // reject('Internet Timeout')
  })
  return promise;
}
getDatafromInternetUsingPromise()
.then((data)=>{
  console.log(`Data is fatched ${data}`)
})
.catch((error)=>{
  console.log(`Error: ${error}`)
})
.finally(()=>{
  console.log("Block the internet")
})