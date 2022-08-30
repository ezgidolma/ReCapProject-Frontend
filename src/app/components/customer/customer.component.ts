import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer:Customer[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
