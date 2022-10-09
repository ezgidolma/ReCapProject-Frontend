
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { RentalDetails } from 'src/app/models/Rental/rentaldetails';
@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {

  apiUrl="https://localhost:44355/api/rentaldetaildtos/getall";
  constructor(private httpClient: HttpClient) { }

    getRentalDetailDtos():Observable<ListResponseModel<RentalDetails>> {
        return this.httpClient.get<ListResponseModel<RentalDetails>>(this.apiUrl);
    }

    getCarRentalDetails(): Observable<ListResponseModel<RentalDetails>> {
      let newPath = this.apiUrl + 'getrentaldetails';
      return this.httpClient.get<ListResponseModel<RentalDetails>>(newPath);
    }
}