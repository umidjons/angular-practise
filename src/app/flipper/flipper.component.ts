import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-flipper',
  templateUrl: './flipper.component.html',
  styleUrls: ['./flipper.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({transform: 'rotateY(180deg)'})),
      state('inactive', style({transform: 'rotateY(0)'})),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class FlipperComponent implements OnInit {

  flip: string = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  toggleFlip() {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }

}
