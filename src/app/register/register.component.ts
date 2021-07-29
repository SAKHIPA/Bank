import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // accno=""
  // pswd=""
  // uname=""

  registerForm=this.fb.group({
    uname:[''],
    accno:[''],
    pw:['']

  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){
  var accno=this.registerForm.value.accno
  var pswd=this.registerForm.value.pswd
  var uname=this.registerForm.value.uname

 var result= this.ds.register(accno,uname,pswd)

 if(result){
    alert("successfully registered")
    this.router.navigateByUrl("")
 }
 else{
    alert("already exist..please log in") 
    this.router.navigateByUrl("") 
 }
}
}