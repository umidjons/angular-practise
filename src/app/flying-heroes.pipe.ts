import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroes',
  pure: false
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(heroes: any): any {
    console.log('transform:', heroes);
    return heroes.filter(hero => hero.canFly);
  }

}
