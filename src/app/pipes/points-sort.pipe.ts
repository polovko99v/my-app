import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPoints'
})
export class PointsSortPipe implements PipeTransform {
  public transform(points: Array<any>): Array<any> {
    return points.sort((a, b) => {
      if (a.type < b.type) {
        return -1;
      }
      if (a.type > b.type) {
        return 1;
      }
      return 0;
    });
  }
}