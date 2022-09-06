import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carimages';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'https://localhost:7266/api/carimages/';
  imageUrl = 'https://localhost:7266/uploads/images/';

  constructor(private httpClient: HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl+"getall");    
  }
  getCarImagesByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl+"getimagesbycarid?carid="+carId);    
  }
  getCarImageSource(carImage:CarImage){
    return this.imageUrl+carImage.imagePath;
  }
}