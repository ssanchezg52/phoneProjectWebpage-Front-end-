import { Injectable } from '@angular/core';
import { Phone } from '../interfaces/phone';

@Injectable({
  providedIn: 'root'
})
export class PhonesIdCompareService {

  private _phonesComparedId:Phone[] = [];
  private _isLastDeleteFirstPosition:boolean = false;

  constructor() { }

  addPhoneComparedId(phone:Phone){
    if (this._phonesComparedId.length <2){
      this._phonesComparedId.push(phone)
    }else if(!this._isLastDeleteFirstPosition){
      this._phonesComparedId.splice(0,1,phone);
      this._isLastDeleteFirstPosition = true;
    }else{
      this._phonesComparedId.splice(1,1,phone)
      this._isLastDeleteFirstPosition = false;
    }
  }

  isListLenghtEqualTwo():boolean{
    return this._phonesComparedId.length == 2;
  }

  emptyList(){
    this.phoneComparedId.splice(0,2);
  }

  public get phoneComparedId(){
    return this._phonesComparedId;
  }
}
