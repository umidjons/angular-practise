import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickMeComponent } from './click-me/click-me.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SortComponent } from './sort/sort.component';
import { FlipperComponent } from './flipper/flipper.component';

const appRoutes: Routes = [
  { path: 'pipe-test', component: SortComponent },
  { path: 'click-me', component: ClickMeComponent },
  { path: 'hero-form', component: HeroFormComponent },
  { path: 'flipper', component: FlipperComponent },
  { path: '', redirectTo: '/hero-form', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
