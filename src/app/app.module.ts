import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AstronautComponent } from './astronaut.component';
import { MissionControlComponent } from './missioncontrol.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';

@NgModule({
  declarations: [
    AppComponent,
    AstronautComponent,
    MissionControlComponent,
    HighlightDirective,
    UnlessDirective,
    HeroBirthdayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
