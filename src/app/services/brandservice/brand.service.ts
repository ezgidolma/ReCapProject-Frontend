import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/Brand/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  urrentBrand:Brand;
  apiUrl="https://localhost:7266/api/";
  constructor(private httpclient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>> {
    return this.httpclient.get<ListResponseModel<Brand>>(this.apiUrl+'brands/getall');
    };

    getCarsByBrandId(brandId:number):Observable<ListResponseModel<Brand>> {
      let newPath=this.apiUrl+ "brands/getbyid?id="+brandId;
      return this.httpclient.get<ListResponseModel<Brand>>(newPath);
      }
      
      addBrand(brand: Brand):Observable<ResponseModel>{
        return this.httpclient.post<ResponseModel>(this.apiUrl+"brands/add", brand)
      }

      deleteBrand(brand:Brand): Observable<ResponseModel>{
        let newPath=this.apiUrl+ "brands/update";
        return this.httpclient.post<ResponseModel>(newPath, brand);
      }

      updateBrand(brand:Brand): Observable<ResponseModel>{
        let newPath=this.apiUrl+"brands/update";
        return this.httpclient.post<ResponseModel>(newPath, brand);
      }

}
