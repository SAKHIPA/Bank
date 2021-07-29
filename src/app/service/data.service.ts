import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  currentUser=""
  currentAcc=""

  users: any = {
    1000: { accno: 1000, uname: "sakhi", pw: 1000, balance: 5000, transaction:[] },
    1001: { accno: 1001, uname: "sali", pw: 1001, balance: 2000, transaction:[] },
    1002: { accno: 1002, uname: "santhi", pw: 1002, balance: 3000, transaction:[] },
    1003: { accno: 1003, uname: "sai", pw: 1003, balance: 3000, transaction:[] }
  }




  constructor() {
    this.getDetails()
   }


  saveDetails(){
    localStorage.setItem("user",JSON.stringify(this.users))
    if(this.currentUser){

    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.currentAcc){

      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
      }
  }
  getDetails(){
    if(localStorage.getItem("users")){
      this.users=JSON.parse(localStorage.getItem("users") ||'')
    }
      
      if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") ||'')
    }
    if(localStorage.getItem("currentAcc")){
      this.currentAcc=JSON.parse(localStorage.getItem("currentAcc") ||'')
    }
  }


  getTransaction(){
  
    
    return this.users[this.currentAcc].transaction

  }


  register(accno: any, uname: any, pw: any) {

    let accDetails = this.users

    if (accno in accDetails) {


      return false
    }
    else {
      accDetails[accno] = {
        accno,
        uname,
        pw,
        balance: 0
      }
      console.log(accDetails);

      this.saveDetails()
      return true
    }

  }
  login(accno: any, pswd: any) {
    let accDetails = this.users


    if (accno in accDetails) {
      if (pswd == accDetails[accno]["pw"]) {

        this.currentUser=accDetails[accno]["uname"]
        this.currentAcc=accno

        this.saveDetails()
        return true

      }
      else {
        alert("invalid password")
        return false

      }
      
    }
    else {
      alert("invalid account")
      return false
    }




  }
  deposit(accno:any,pw:any,amount:any){
    let accDetails=this.users

    var amt=parseInt(amount)

    if(accno in accDetails){
      if(pw==accDetails[accno]["pw"]){
        accDetails[accno]["balance"]+=amt

        accDetails[accno].transaction.push({
          amount:amt,
          type:"CREDIT"
        })

        this.saveDetails()
        return accDetails[accno]["balance"]
      }
      else{
        alert("invalid pw")
        return false
      }

    }
    else{
      alert("invalid accno")
      return false
    }
  }

  withdraw(accno:any,pw:any,amount:any){
    let accDetails=this.users

    var amt=parseInt(amount)

    if(accno in accDetails){
      if(pw==accDetails[accno]["pw"]){
        if(accDetails[accno]["balance"]>amt){
        accDetails[accno]["balance"]-=amt

        accDetails[accno].transaction.push({
          amount:amt,
          type:"DEBIT"
        })

        this.saveDetails()
        return accDetails[accno]["balance"]
        }else{
          alert("Insufficient balance")
        }
      }
      else{
        alert("invalid pw")
        return false
      }

    }
    else{
      alert("invalid accno")
      return false
    }
  }
}
