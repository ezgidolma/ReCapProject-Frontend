import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Brand/brand';
import { BrandResponseModel } from 'src/app/models/Brand/brandResponseModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  apiUrl="https://localhost:7266/api/brands/getall";
  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.httpclient
    .get<BrandResponseModel>(this.apiUrl)
    .subscribe((response) => {
    this.brands= response.data
      } );
    }

}
