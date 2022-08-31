import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/Rental/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:7266/api/rentals/getall";
  constructor(private httpclient:HttpClient) { }

  getRentals() : Observable<RentalResponseModel>{
    return this.httpclient.get<RentalResponseModel>(this.apiUrl);
  }
}
