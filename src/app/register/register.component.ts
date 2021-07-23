import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accno=""
  pswd=""
  uname=""

  constructor() { }

  ngOnInit(): void {
  }
register(){
  alert("registered")
}
}
