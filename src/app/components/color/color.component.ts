import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/Color/color';
import { ColorResponseModel } from 'src/app/models/Color/colorResponseModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color:Color[]=[];
  apiUrl = 'https://localhost:7266/api/colors/getall';
  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
  }

  
}
