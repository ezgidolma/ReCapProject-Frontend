import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/Color/color';
import { ColorService } from 'src/app/services/colorservice/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  currentColor :Color={colorId:1,name:""};
  dataLoaded=false;
  constructor(private colorService:ColorService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.getColor();
  }

  getColor(){
    this.colorService.getColors().subscribe(response =>{
      this.colors=response.data
      this.dataLoaded=true;
    })
  }

  setCurrentColor(color:Color){
    this.currentColor=color;
  }

  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  
}
