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
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["branId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    
  }

  getCarsByBrand(id:number){
    this.carService.getCarsByBrand(id).subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    
  }

  getCarsByColor(id:number){
    this.carService.getCarsByColor(id).subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    
  }

}
