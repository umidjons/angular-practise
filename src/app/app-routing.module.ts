import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickMeComponent } from './click-me/click-me.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'click-me', component: ClickMeComponent },
  { path: 'hero-form', component: HeroFormComponent },
  { path: '', redirectTo: '/hero-form', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
