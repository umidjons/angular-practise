import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-birthday',
  templateUrl: './hero-birthday.component.html',
  styleUrls: ['./hero-birthday.component.css']
})
export class HeroBirthdayComponent implements OnInit {

  birthday: Date = new Date(1988, 3, 15);

  constructor() { }

  ngOnInit() {
  }

}
