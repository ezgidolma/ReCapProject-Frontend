import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/Car/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:7266/api/";
  constructor(private httpClient : HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(id:number) : Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbybrand?id="+id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(id:number) : Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbycolor?id="+id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
