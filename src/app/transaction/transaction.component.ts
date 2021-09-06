import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction: any
  accno: any
  constructor(private ds: DataService) {
    this.accno = localStorage.getItem("currentAcc")
    this.ds.getTransaction(this.accno).subscribe((result: any) => {
      if (result) {
        console.log(result.transaction)
        
        this.transaction = result.transaction
      }
    },
      (result) => {
        alert(result.error.message)
      
  })

    //this.transaction=this.ds.getTransaction()

   }

  ngOnInit(): void {
  }

}
