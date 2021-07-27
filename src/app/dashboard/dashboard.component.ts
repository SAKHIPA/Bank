

import { Component, OnInit } from '@angular/core';
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
  pswd1 = ""
  amt1 = ""

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }
  deposit() {
    var accno = this.accno
    var pswd = this.pswd
    var amount = this.amt

    var result = this.ds.deposit(accno, pswd, amount)

    if (result) {
      alert(amount + "credited and new balance:" + result)

    }

  }
  withdraw() {
    var accno=this.accno1
    var pswd=this.pswd1
    var amount=this.amt1

    var result=this.ds.withdraw(accno,pswd,amount)
    if(result){

      alert(amount + "Debited and new balance:" + result)

      
    }

  }

}


