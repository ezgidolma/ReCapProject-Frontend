import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/Brand/brand';
import { Car } from 'src/app/models/Car/car';
import { CarDetailDto } from 'src/app/models/Car/carDetailDto';
import { CarImage } from 'src/app/models/Car/carimages';
import { Color } from 'src/app/models/Color/color';
import { BrandService } from 'src/app/services/brandservice/brand.service';
import { CarService } from 'src/app/services/carservice/car.service';
import { ColorService } from 'src/app/services/colorservice/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : Car[] = [];
  carDetails: CarDetailDto[] = [];
  carImage: CarImage[]=[];
  colors:Color[]=[];
  filterCar:"";
  brandFilter:number=0;
  brands:Brand[]=[];
  filterColor:number=0;

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,
     private colorService:ColorService,
     private brandService:BrandService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
      this.getAllBrands();
      this.getAllColors();

       if(params["brandId"] && params["brandId"]){
        this.getCarsDetailByBrandAndColorId(params["colorId"],params["brandId"])
             }
        else if(params["brandId"]){
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
      this.carDetails=response.data
    })
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data
    })
  }

  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.carDetails=response.data
    })

  }

  getCarsDetailByBrandAndColorId(brandId:number, colorId:number) {
    this.carService.getCarsDetailByBrandAndColorId(colorId, brandId).subscribe(response=>{
      console.log(response)
      this.carDetails=response.data;  
    })

  }

  getSelectedBrand(brandId: number){
    if(this.brandFilter==brandId) return true;
    else return false; 
  }
  getSelectedColor(colorId: number){
    if(this.filterColor==colorId) return true;
    else return false; 
  }
  
 
  getAllColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      console.log(this.colors);
    });
  }

  getAllBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      console.log(this.brands);
    });
  }

  
  
}