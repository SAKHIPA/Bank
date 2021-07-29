import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser=""
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
  }
  getDetails(){
    if(localStorage.getItem("users")){
      this.users=JSON.parse(localStorage.getItem("users") ||'')
    }
      
      if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") ||'')
    }
  }


  getTransaction(){
    
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
