import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/Car/carDetailDto';
import { CarImage } from 'src/app/models/Car/carimages';
import { CarImageService } from 'src/app/services/carservice/carimage.service';
import { CarService } from 'src/app/services/carservice/car.service';
import { Car } from 'src/app/models/Car/car';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  cars:CarDetailDto[]=[];
  carImagePaths:string[] = [];
  carDetail: CarDetailDto;
  dataLoaded = false;
  imageUrl:string="https://localhost:7266/Uploads/images/"
  carImages:CarImage[]=[];

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if(params['carId']){
          this.getCarsDetailsByCarId(params['carId'])

        }
    })
  }
  getCarsDetailsByCarId(carId: number) {
    this.carService.getCarById(carId).subscribe((response)=>{

    })
  }


  
}
