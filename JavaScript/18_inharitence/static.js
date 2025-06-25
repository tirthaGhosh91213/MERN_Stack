class AccountHolder{
constructor(firstname,lastname){
  this.firstname=firstname;
  this.lastname=lastname;
  this.accountBlance=0;

}
static rateOfInterest=4;
static getrateOfInterest(){
  console.log(`The rate of intrest is ${this.rateOfInterest}%`)
}
credit(amount){
  this.accountBlance+=amount;
}
debit(amount){
  this.accountBlance-=amount;
}
getAccountBlance(){
  console.log(`The current account blance is ${this.accountBlance}`)
}

}
let pudu=new AccountHolder('pudu','ghosh')
pudu.getAccountBlance()
pudu.credit(1000)
pudu.debit(200);
pudu.getAccountBlance();