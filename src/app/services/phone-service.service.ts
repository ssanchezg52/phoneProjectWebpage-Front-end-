import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Phone } from '../interfaces/phone';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  
  private readonly apiUrl = "http://localhost:8080";
  private readonly phoneListByPage = "/getPhoneList/";
  private readonly phoneListByBrand = "/searchByBrand/";
  private readonly phoneByBrandAndModel = "/searchByNamePhone/";
  private readonly phoneById = "/searchById/"

  constructor(private http:HttpClient){
  }

  getPhoneListByPage(page:number, size:number):Observable<Response>{
    return <Observable<Response>> this.http.get<Response>(this.apiUrl + this.phoneListByPage + page + "/"+ size);
  }

  searchByBrand(buscador:string,page:number):Observable<Response>{
    return <Observable<Response>> this.http.get<Response>(this.apiUrl + this.phoneListByBrand + buscador + "/"+page);
  }

  searchByBrandAndModel(brand:string,model:string):Observable<Response>{
    return <Observable<Response>> this.http.get<Response>(this.apiUrl + this.phoneByBrandAndModel + brand + "/" + model);
  }

  searchById(id:number):Observable<Response>{
    return <Observable<Response>> this.http.get<Response>(this.apiUrl + this.phoneById + id);
  }
  
}
