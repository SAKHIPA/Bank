import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accno=""
  pswd=""
  uname=""

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  var accno=this.accno
  var pswd=this.pswd
  var uname=this.uname

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