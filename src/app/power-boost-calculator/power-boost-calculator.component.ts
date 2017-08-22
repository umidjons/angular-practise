import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'power-boost-calculator',
  templateUrl: './power-boost-calculator.component.html',
  styleUrls: ['./power-boost-calculator.component.css']
})
export class PowerBoostCalculatorComponent implements OnInit {

  power: number = 5;
  factor: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
