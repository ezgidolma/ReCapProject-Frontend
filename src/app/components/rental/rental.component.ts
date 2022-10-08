import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDetailDto } from 'src/app/models/Car/carDetailDto';
import { Rental } from 'src/app/models/Rental/rental';
import { RentalDetails } from 'src/app/models/Rental/rentaldetails';
import { CustomerService } from 'src/app/services/customerservice/customer.service';
import { RentalService } from 'src/app/services/rentalservice/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalDetails:RentalDetails[] = [];
  rentDate:Date;
  returnDate:Date;

  rentals:Rental;
  message:string|null;
  minDate:string|null
  maxDate:string|null
  car:CarDetailDto;
  firstDateSelected:boolean= false; // rentDate seçili değilse, returnDate aktif olmayacak.
  state:number = 1;
  customerId:number

  @Input() carforRent:CarDetailDto

  constructor(private  rentalService:RentalService,
    private datePipe: DatePipe,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  getCarRentalDetails() {
    this.rentalService.getCarRentalDetails().subscribe((response) => {
      this.rentalDetails = response.data;
    });
  }
  
  getCustomerDetails() {
    CustomerService
  }
}
