import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/carimage.service';


@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetail:CarDetail ;
  cardetails:CarDetail[]=[];
   dataLoaded=false;

  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute,private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
        if(params["brandId"]){
          this.getCarDetailsByBrandId(params["brandId"])
        }
        else if(params["colorId"]){
          this.getCarDetailsByColorId(params["colorId"])
        }
       else{
          this.getAllCarDetails()
        }
      })
  }

    
  getAllCarDetails() {
    this.carDetailService.getAllCarDetails().subscribe((response) => {
      this.cardetails = response.data;
    });
  }



  getCarDetailsByBrandId(brandId: number) {
    this.carDetailService.getCarDetailsByBrandId(brandId).subscribe(
      (response) => {
        this.cardetails = response.data;
      }
    );
  }

  getCarDetailsByColorId(colorId: number) {
    this.carDetailService.getCarDetailsByColorId(colorId).subscribe(
      (response) => {
        this.cardetails = response.data;
      }
    );
  }
}
  
