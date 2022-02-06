import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Phone } from '../interfaces/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  
  private readonly apiUrl = "http://localhost:8080";
  private readonly phoneList = "/getListPhonesWithoutResponse";
  private readonly phoneListByBrand = "/searchByBrand/";

  constructor(private http:HttpClient){
  }

  public phoneList$:Observable<Phone[]> = this.http.get<Phone[]>(this.apiUrl + this.phoneList);

  async getPhoneListByBrand(buscador: string) {
    return await this.http.get<Phone[]>(this.apiUrl + this.phoneListByBrand + buscador);
  }

  async getPhoneList() {
    return await this.http.get<Phone[]>(this.apiUrl+ this.phoneList); 
  }
  
}
