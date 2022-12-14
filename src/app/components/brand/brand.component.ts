import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Brand/brand';

import { BrandService } from 'src/app/services/brandservice/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  
  brands:Brand[]=[];
  currentBrand :Brand | null;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      return this.brands=response.data;
      
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  reset(){
    this.currentBrand = null;

  }

  
}
