import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/Brand/brand';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Brand[], filterBrand: string): Brand[] {
    filterBrand = filterBrand ? filterBrand.toLocaleLowerCase():"";

    return filterBrand ? value.filter(
        (b : Brand) => b.name.toLocaleLowerCase().indexOf(filterBrand) !== -1) : value;
  }
}
