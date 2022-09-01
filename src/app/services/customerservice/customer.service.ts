import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from 'src/app/models/Customer/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:7266/api/customers/getcustomerdetails";
  constructor(private httpclient:HttpClient) { }

  getCustomers() : Observable<CustomerResponseModel>{
    return this.httpclient.get<CustomerResponseModel>(this.apiUrl);
  }
}
