import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer/customer';
import { CustomerResponseModel } from 'src/app/models/Customer/customerResponseModel';
import { CustomerService } from 'src/app/services/customerservice/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  dataLoaded=false;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.customerService.getCustomers().subscribe(response =>{
      this.customers=response.data
      this.dataLoaded=true;
    })
  }

}
