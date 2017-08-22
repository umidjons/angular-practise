import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {

  heroes: any[] = [];

  canFly: boolean = true;

  constructor() {
    this.reset();
  }

  addHero(name: string) {
    name = name.trim();

    if (!name) return;

    let hero = {name, canFly: this.canFly};
    console.log('hero=', hero);

    this.heroes.push(hero);
  }

  reset() {
    this.heroes = [];
  }

  ngOnInit() {
  }

}
