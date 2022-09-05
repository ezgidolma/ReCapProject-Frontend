import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/Brand/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:7266/api/brands/getall";
  constructor(private httpclient:HttpClient) { }

  getBrands() : Observable<ListResponseModel<Brand>>{
    return this.httpclient.get<ListResponseModel<Brand>>(this.apiUrl);
  }


}
