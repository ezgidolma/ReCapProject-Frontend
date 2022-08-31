import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/Color/color';
import { ColorResponseModel } from 'src/app/models/Color/colorResponseModel';
import { ColorService } from 'src/app/services/colorservice/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  dataLoaded=false;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
   this.getColor();
  }

  getColor(){
    this.colorService.getColors().subscribe(response =>{
      this.colors=response.data
      this.dataLoaded=true;
    })
  }

  
}
