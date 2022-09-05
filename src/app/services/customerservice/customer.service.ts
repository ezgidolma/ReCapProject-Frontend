import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:7266/api/customers/getcustomerdetails";
  constructor(private httpclient:HttpClient) { }

  getCustomers() : Observable<ListResponseModel<Customer>>{
    return this.httpclient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
