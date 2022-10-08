import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:7266/api/";
  constructor(private httpclient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    return this.httpclient.get<ListResponseModel<Customer>>(
      this.apiUrl +'Customers/GetAll'
      );

  }
  getCustomerByUserId(userId:number) : Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl + "Customers/getbyuserid?userId=" + userId;
    return this.httpclient.get<ListResponseModel<Customer>>(newPath);
  }

  addCustomer(customer:Customer):Observable<ResponseModel>{
    return this.httpclient.post<ResponseModel>(this.apiUrl + "Customers/Add",customer)
  }

  updateCustomer(customer:Customer):Observable<ResponseModel>{
    return this.httpclient.post<ResponseModel>(this.apiUrl + "Customers/Update",customer)
  }
}
