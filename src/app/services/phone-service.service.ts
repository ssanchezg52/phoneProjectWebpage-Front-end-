import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Phone } from '../interfaces/phone';
import { Response } from '../interfaces/response';
import { Token } from '../interfaces/token';
import { TokenService } from './token.service';

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

  getHttpOptions(accessToken:String | undefined){
    return {
      headers: new HttpHeaders({
        "Authorization": "Bearer "+accessToken
      })}
  }

  getPhoneListByPage(page:number, size:number, accessToken?:String):Observable<Response>{
    let httpOptions = this.getHttpOptions(accessToken);
     return <Observable<Response>> this.http.get<Response>(this.apiUrl + this.phoneListByPage + page + "/"+ size,httpOptions);
  }

  searchByBrand(buscador:string,page:number, accessToken?:String):Observable<Response>{
    let httpOptions = this.getHttpOptions(accessToken);
    return <Observable<Response>> this.http.get<Response>(this.apiUrl + this.phoneListByBrand + buscador + "/"+page,httpOptions);
  }

  searchById(id:number, accessToken?:String):Observable<Response>{
    let httpOptions = this.getHttpOptions(accessToken);
    return <Observable<Response>> this.http.get<Response>(this.apiUrl + this.phoneById + id,httpOptions);
  }
  
}
