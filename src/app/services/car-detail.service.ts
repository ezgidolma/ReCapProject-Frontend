import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl= 'https://localhost:7266/api/';
  constructor(private httpClient:HttpClient) { }


  getAllCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+ "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+ "cars/getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>( newPath)
  }

  getCarDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+  "cars/getcardetailsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+ "cars/getcardetailsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}
