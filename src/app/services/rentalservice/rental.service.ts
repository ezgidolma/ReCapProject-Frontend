import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/Rental/rental';
import { RentalDetails } from 'src/app/models/Rental/rentaldetails';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:7266/api/rentals/";
  constructor(private httpclient:HttpClient) { }

  getCarRentalDetails(): Observable<ListResponseModel<RentalDetails>> {
    let newPath = this.apiUrl + 'getrentaldetails';
    return this.httpclient.get<ListResponseModel<RentalDetails>>(newPath);
  }

  getRentalCars(): Observable<ListResponseModel<RentalDetails>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpclient.get<ListResponseModel<RentalDetails>>(newPath);
  }


addRental(rental:Rental): Observable<ResponseModel> {
  let newPath = this.apiUrl + 'add'
  return this.httpclient.post<ResponseModel>(newPath, rental);
}
}
