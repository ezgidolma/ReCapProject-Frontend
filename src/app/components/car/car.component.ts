import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car/car';
import {HttpClient} from '@angular/common/http'
import { CarResponseModel } from 'src/app/models/Car/carResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  apiUrl="https://localhost:7266/api/cars/getall";
  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
  this.httpclient
  .get<CarResponseModel>(this.apiUrl)
  .subscribe((response) => {
  this.cars= response.data
    } );
  }

}
