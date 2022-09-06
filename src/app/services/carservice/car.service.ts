import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/Car/car';
import { CarDetail } from 'src/app/models/carDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:7266/api/";
  constructor(private httpClient : HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);    
  }
  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"getcardetailsbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);    
  }
  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"getcardetailsbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);    
  }
}
