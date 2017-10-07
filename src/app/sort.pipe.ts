import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args?: string): any[] {
    if (args === undefined) {
      args = 'asc';
    }

    let result: any[] = value.sort();

    if (args === 'desc') {
      result = result.reverse();
    }

    return result;
  }

}
