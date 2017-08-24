import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers: string[] = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
