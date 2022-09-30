import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/Color/color';


@Pipe({
  name: 'colorPipe'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], colorFilter:string): Color[] {
    colorFilter=colorFilter?colorFilter.toLocaleLowerCase():""

    return colorFilter?value.filter(
      (c:Color)=>c.name.toLocaleLowerCase().indexOf(colorFilter)!==-1):value;
  }
}