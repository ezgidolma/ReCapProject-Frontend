import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/Car/carDetailDto';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  
  transform(value: CarDetailDto[], filterCar: string): CarDetailDto[] {
    filterCar = filterCar ? filterCar.toLocaleLowerCase():"";

    return filterCar ? value.filter((c: CarDetailDto) => 
    c.brandName.toLocaleLowerCase().indexOf(filterCar) !== -1 ||
    c.colorName.toLocaleLowerCase().indexOf(filterCar) !== -1 ||
    c.carName.toLocaleLowerCase().indexOf(filterCar) !== -1 ||
    c.carId.toString().indexOf(filterCar) !== -1 ||
    c.dailyPrice.toString().indexOf(filterCar) !== -1 ) : value;
}
}
