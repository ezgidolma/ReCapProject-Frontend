import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/Car/car';
import { CarImage } from 'src/app/models/carimages';
import { CarImageService } from 'src/app/services/carimage.service';
import { CarService } from 'src/app/services/carservice/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[]=[];
  carImages:CarImage[];
  currentImage:CarImage;
  imageUrl="https://localhost:7266";

  constructor(private carService:CarService, private carImageService:CarImageService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarById(params["carId"])
      this.getImageByCarId(params["carId"])
    })
  }

  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe(response => {
      this.cars = response.data;
    })
  }

  getImageByCarId(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response => {
      this.carImages = response.data;
    })
  }

  getButtonClass(image:CarImage){
    if((image == this.carImages[0])){
      return 'active';
    }
    else{
      return '';
    }
  }

  getCurrentImageClass(image:CarImage){
    if (this.carImages[0] == image) {
      return 'carousel-item active';
    } else {
      return 'carousel-item ';
    }
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCarImage(carImage:CarImage, carId:number){
    if(carImage.carId == 0){
      let path = this.imageUrl + "/images/cars.jpg"
      return path;
    }
    else{
      let path = this.imageUrl + carImage.imagePath;
      return path;
    }
  }
}