import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/Car/car';
import { CarDetailDto } from 'src/app/models/Car/carDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:7266/api/";
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"Cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);    
  }

  getCarDetails():Observable<ListResponseModel<CarDetailDto>>{
    let newPath= this.apiUrl+"Cars/getCarDetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);    
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "Cars/getbybrand?brandid=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "Cars/getbycolor?colorid=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  

  getCarById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycar?id=" + carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
 
  getCarsDetailByBrandAndColorId(colorId:number,brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl +"Cars/GetCarDetailsByColorAndByBrand?colorId="+colorId+ "&brandId=" +brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }



  
}