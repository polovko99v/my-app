import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundPoint'
})
export class PlayerPointPipe implements PipeTransform {
  public transform(point: number): number {
    return Math.round(point);
  }
}