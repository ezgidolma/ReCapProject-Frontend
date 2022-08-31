import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/Rental/rental';
import { RentalResponseModel } from 'src/app/models/Rental/rentalResponseModel';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  apiUrl="https://localhost:7266/api/rentals/getall";
  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
    this.getRental();
  }
  getRental(){
    this.httpclient
  .get<RentalResponseModel>(this.apiUrl)
  .subscribe((response) => {
  this.rentals=response.data
  });
  }
}
