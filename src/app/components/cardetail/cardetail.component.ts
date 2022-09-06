import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/carservice/car.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails :CarDetail[] = [];
  
  constructor(private carService:CarService, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarDetailsByColor(params["colorId"]);
      }
      else{
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data   ;
    })
  }
  getCarDetailsByBrand(brandId:number){
    this.carService.getCarDetailsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }
  getCarDetailsByColor(colorId:number){
    this.carService.getCarDetailsByColor(colorId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }


}