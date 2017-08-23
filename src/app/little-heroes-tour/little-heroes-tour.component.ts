import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'little-heroes-tour',
  templateUrl: './little-heroes-tour.component.html',
  styleUrls: ['./little-heroes-tour.component.css']
})
export class LittleHeroesTourComponent implements OnInit {
  heroes: string[] = ['First', 'Second'];

  constructor() { }

  ngOnInit() {
  }

  addHero(name: string) {
    if (name) {
      this.heroes.push(name);
    }
  }

}
