import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AstronautComponent } from './astronaut.component';
import { MissionControlComponent } from './missioncontrol.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    AstronautComponent,
    MissionControlComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
