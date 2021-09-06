import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations:[trigger('openClose',[
    state('open',style({
      height:'500px',
      backgroundColor:'red'
    })),
    state('close',style({
      height:'100px',
      backgroundColor:'yellow'
    })),
    transition('open=>close',[
      animate('2s')
    ]),
    transition('close=>open',[
      animate('5s')
    ])
  ])]
})
export class AnimationdemoComponent implements OnInit {
  isOpen=true

  constructor() { }

  ngOnInit(): void {
  }
toggle(){
  this.isOpen=! this.isOpen
}

}
