

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accno = ""
  pswd = ""
  amt = ""

  accno1 = ""
  pswd1= ""
  amt1 = ""


  depositForm = this.fb.group({
    accno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })


  withdrawForm = this.fb.group({
    accno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })

  //user = this.ds.currentUser

  userName:any
  acno:any

  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) {
    this.userName=localStorage.getItem("userName")
   }

  ngOnInit(): void {
  }
  deposit() {

    if (this.depositForm.valid) {
      var accno = this.depositForm.value.accno
      var pw= this.depositForm.value.pw
      var amount = this.depositForm.value.amt


      this.ds.deposit(accno, pw, amount).subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert("invalid form")
    }
  }


  //     var result = this.ds.deposit(accno, pw, amount)

  //     if (result) {
  //       alert(amount + "credited and new balance:" + result)

  //     }
  //   }
  //   else {
  //     alert("invalid form")
  //   }

  // }

  withdraw() {
    if(this.withdrawForm.valid){

    var accno = this.withdrawForm.value.accno
    var pw = this.withdrawForm.value.pw
    var amount = this.withdrawForm.value.amt

    this.ds.withdraw(accno, pw, amount).subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },
    (result)=>{
      alert(result.error.message)
    })
  }
  else{
    alert("invalid form")
  }
}


  //   var result = this.ds.withdraw(accno, pw, amount)
  //   if (result) {

  //     alert(amount + "Debited and new balance:" + result)


  //   }
  // }
  // else{
  //   alert("invalid form")
  // }

  // }

  deleteAcc(){
    this.acno=localStorage.getItem("currentAcc")
  }
  onDeleteAtParent(event:any){
    this.ds.deleteAcc(event).subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("")
      }
    },
    (result)=>{
      alert(result.error.message)
    })
  }

  onCancel(){
    this.acno=""
  }
}



