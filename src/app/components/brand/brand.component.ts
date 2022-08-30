import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Brand/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand:Brand[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
