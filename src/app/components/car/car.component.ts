import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = { carId: 1, carName: 'Clio', brandId: 1, dailyPrice: 1500 }
  car2 = { carId: 2, carName: 'BMW', brandId: 1, dailyPrice: 2500 }
  car3 = { carId: 3, carName: 'Audi', brandId: 1, dailyPrice: 3500 }
  car4 = { carId: 4, carName: 'Passat', brandId: 1, dailyPrice: 1000 }
  car5 = { carId: 5, carName: 'Fiat', brandId: 1, dailyPrice: 900 }

  cars = [this.car1, this.car2, this.car3, this.car4, this.car5]
  
  constructor() { }

  ngOnInit(): void {
  }

}
