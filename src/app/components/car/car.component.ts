import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/Car/car';
import { CarDetailDto } from 'src/app/models/Car/carDetailDto';
import { CarService } from 'src/app/services/carservice/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : Car[] = [];
  cardetails: CarDetailDto[]=[];

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
       if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
       }
       else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
       }
       else{
          this.getCarDetails()
       }
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
    })
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response=>{
      this.cardetails=response.data
    })
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
    })
  }

  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
    })
  }
}