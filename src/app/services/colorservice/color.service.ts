import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/Color/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:7266/api/colors/getall";
  constructor(private httpclient:HttpClient) { }

  getColors() : Observable<ListResponseModel<Color>>{
    return this.httpclient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
