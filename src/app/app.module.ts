import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AstronautComponent } from './astronaut.component';
import { MissionControlComponent } from './missioncontrol.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PowerBoostCalculatorComponent } from './power-boost-calculator/power-boost-calculator.component';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LittleHeroesTourComponent } from './little-heroes-tour/little-heroes-tour.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AstronautComponent,
    MissionControlComponent,
    HighlightDirective,
    UnlessDirective,
    HeroBirthdayComponent,
    ExponentialStrengthPipe,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    HeroAsyncMessageComponent,
    HeroListComponent,
    ClickMeComponent,
    KeyupComponent,
    LittleHeroesTourComponent,
    HeroFormComponent,
    ForbiddenValidatorDirective,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
