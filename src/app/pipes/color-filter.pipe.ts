import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/Color/color';

@Pipe({
  name: 'colorPipe'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], filterColor: string): Color[] {
    filterColor = filterColor ? filterColor.toLocaleLowerCase():"";

    return filterColor ? value.filter(
        (co: Color) => co.name.toLocaleLowerCase().indexOf(filterColor) !== -1) : value;
  }
}
