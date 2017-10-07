import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  arr: number[];

  constructor() { }

  ngOnInit() {
    this.arr = [9, 5, 1, 7, 0, 2, 4];
  }

}
