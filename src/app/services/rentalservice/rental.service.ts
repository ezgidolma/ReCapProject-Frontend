import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/Rental/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:7266/api/rentals/getrentaldetails";
  constructor(private httpclient:HttpClient) { }

  getRentals() : Observable<ListResponseModel<Rental>>{
    return this.httpclient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
