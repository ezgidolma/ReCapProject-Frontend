import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer/customer';
import { CustomerResponseModel } from 'src/app/models/Customer/customerResponseModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  apiUrl="https://localhost:7266/api/customers/getall";
  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.httpclient
    .get<CustomerResponseModel>(this.apiUrl)
    .subscribe((response) => {
    this.customers= response.data
      } );
  }

}
