import { Component } from '@angular/core';
import { Heroes } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Heroes]
})
export class AppComponent {
  
  condition: boolean = false;

  constructor(private heroes: Heroes) {}

}
