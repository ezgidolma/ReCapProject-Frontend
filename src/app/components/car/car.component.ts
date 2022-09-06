import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car/car';
import {HttpClient} from '@angular/common/http'
import { CarService } from 'src/app/services/carservice/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  dataLoaded=false;
  currentCar:Car;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params=>{
    //   params['brandId']
    //     ? this.getCarsByBrand(params['brandId'])
    //     :params['colorId']
    //     ? this.getCarsByColor(params['colorId'])
    //     : this.getCars();
    // });
  }

  
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  setButtonDetail(car:Car){
    this.currentCar=car
  }

  getCurrentButtonClass(car:Car){
      if (this.currentCar==car) {
        return '"btn btn-primary"'
      }
      else{
        return '"btn btn-primary"'
      }
  }


}
