import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from 'src/app/models/Color/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:7266/api/colors/getall";
  constructor(private httpclient:HttpClient) { }

  getColors() : Observable<ColorResponseModel>{
    return this.httpclient.get<ColorResponseModel>(this.apiUrl);
  }
}
