import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carimages';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl= 'https://localhost:7266/api/';
  constructor(private httpClient:HttpClient) { }

  getCarImageById(id:number):Observable<ListResponseModel<CarImage>>{
    let newpath =this.apiUrl +"cars/getbyid?id="+id
    return this.httpClient.get<ListResponseModel<CarImage>>(newpath )
  }

  getImagesByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    let newpath =this.apiUrl + "carImages/getallbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newpath)
  };
  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newpath=this.apiUrl+"carImages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newpath)
  }
}