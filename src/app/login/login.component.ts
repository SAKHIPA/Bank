import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bank="Welcome to SBL Bank"
  acno="Please enter account no"
  accno=""
  pswd=""

  users:any={
    1000:{accountNo:1000,user:"sakhi",pw:1000,balance:1000},
    1001:{accountNo:1001,user:"sali",pw:1000,balance:1000},
    1002:{accountNo:1002,user:"santhi",pw:1000,balance:1000},
    1003:{accountNo:1003,user:"sahi",pw:1000,balance:1000},
  }
  

  constructor() { }

  ngOnInit(): void {
  }
  accNumber(event:any){
    this.accno=event.target.value
  }
  pwdChange(event:any){
    this.pswd=event.target.value

  }
  login(){
    var accno=this.accno;
    var pswd=this.pswd
    let accDetails=this.users

    if(accno in accDetails){
      if(pswd==accDetails[accno]["pw"]){
        alert("login success")
      }
      else{
        alert("invalid password")
      }

    }else{
      alert("invalid account")
    }

  }

}
