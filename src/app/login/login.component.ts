import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  pw = ""


  loginForm = this.fb.group({
    accno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })





  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // accNumber(event:any){
  //   this.accno=event.target.value
  // }
  // pwdChange(event:any){
  //   this.pswd=event.target.value

  // }
  login() {


    if (this.loginForm.valid) {
      var accno = this.loginForm.value.accno
      var pw = this.loginForm.value.pw

      this.ds.login(accno, pw)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            localStorage.setItem("userName",result.userName)
            localStorage.setItem("currentAcc",result.currentAcc)

            this.router.navigateByUrl("dashboard")

          }
        }, (result) => {
          alert(result.error.message)

          this.router.navigateByUrl("register")

        })



    }
    else {
      alert("invalid form")
    }
    //   var result = this.ds.login(accno, pw)

    //   if (result) {
    //     alert("login success")
    //     this.router.navigateByUrl("dashboard")
    //   }


    // }
    // else{
    //   alert("invalid form")
    // }


  }
}
  // // login(){
  // //   var accno=this.accno;
  // //   var pswd=this.pswd
  // //   let accDetails=this.users

  // //   if(accno in accDetails){
  // //     if(pswd==accDetails[accno]["pw"]){
  // //       alert("login success")
  // //     }
  // //     else{
  // //       alert("invalid password")
  // //     }

  // //   }else{
  // //     alert("invalid account")
  // //   }

  // // }


