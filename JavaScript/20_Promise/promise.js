// console.log("Promices")
function getDatafromInternet(succesCallback){
  console.log("Getting data from Internet");
  setTimeout(()=>{
    succesCallback('KG Coding')
  },3000)

}
function sendingDatatoDB(succesCallback){
  console.log("Sending data to DB");
  setTimeout(()=>{
    succesCallback('tirtha_91213')
  },3000)

}
function sendResponcetoUser(succesCallback){
  console.log("Sending responce to user");
  setTimeout(()=>{
    succesCallback('hello')
  },3000)
}
getDatafromInternet((data)=>{
  console.log(`Data is fatched ${data}`);
  sendingDatatoDB((id)=>{
    console.log(`Data is send to the DB id is ${id}`)
    sendResponcetoUser((greed)=>{
      console.log(`Responce is send to the user ${greed}`)
    })
  })
})