import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: any = {
    1000: { accno: 1000, uname: "sakhi", pw: 1000, balance: 5000 },
    1001: { accno: 1001, uname: "sali", pw: 1001, balance: 2000 },
    1002: { accno: 1002, uname: "santhi", pw: 1002, balance: 3000 },
    1003: { accno: 1003, uname: "sai", pw: 1003, balance: 3000 }
  }




  constructor() { }


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


      return true
    }

  }
  login(accno: any, pswd: any) {
    let accDetails = this.users

    if (accno in accDetails) {
      if (pswd == accDetails[accno]["pw"]) {
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
