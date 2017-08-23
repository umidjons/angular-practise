import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {
  values: string = '';

  constructor() { }

  ngOnInit() {
  }

  onKey(value: string) {
    this.values += value + ' | ';
  }

}
