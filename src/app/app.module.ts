import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AstronautComponent } from './astronaut.component';
import { MissionControlComponent } from './missioncontrol.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PowerBoostCalculatorComponent } from './power-boost-calculator/power-boost-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AstronautComponent,
    MissionControlComponent,
    HighlightDirective,
    UnlessDirective,
    HeroBirthdayComponent,
    ExponentialStrengthPipe,
    PowerBoostCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
