import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bank = "Welcome to SBL Bank"

  accno = "Please enter account no"
  pswd = ""





  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }
  // accNumber(event:any){
  //   this.accno=event.target.value
  // }
  // pwdChange(event:any){
  //   this.pswd=event.target.value

  // }
  login() {
    var accno = this.accno
    var pswd = this.pswd
    var result = this.ds.login(accno, pswd)

    if (result) {
      alert("login success")
      this.router.navigateByUrl("dashboard")
    }



  }
  // login(){
  //   var accno=this.accno;
  //   var pswd=this.pswd
  //   let accDetails=this.users

  //   if(accno in accDetails){
  //     if(pswd==accDetails[accno]["pw"]){
  //       alert("login success")
  //     }
  //     else{
  //       alert("invalid password")
  //     }

  //   }else{
  //     alert("invalid account")
  //   }

  // }


}