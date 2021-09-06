import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // accno=""
  // pswd=""
  // uname=""

  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    accno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {


    if (this.registerForm.valid) {
      var accno = this.registerForm.value.accno
      var pw = this.registerForm.value.pw
      var uname = this.registerForm.value.uname
    this.ds.register(accno, uname, pw)
        .subscribe((result:any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl("")
          }
        },
          (result) => {
            alert(result.error.message)

            this.router.navigateByUrl("")

          })
    }

    else {
      alert("invalid form")
    }





  }
}



//       var result = this.ds.register(accno, uname, pw)

//       if (result) {
//         alert("successfully registered")
//         this.router.navigateByUrl("")
//       }
//       else {
//         alert("already exist..please log in")
//         this.router.navigateByUrl("")
//       }
//     }
//     else {
//       alert("invalid form")
//     }
//    }
// }