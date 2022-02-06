import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../interfaces/phone';
import { PhoneService } from '../services/phone-service.service';

@Component({
  selector: 'app-body-cards-phones',
  templateUrl: './body-cards-phones.component.html',
  styleUrls: ['./body-cards-phones.component.css']
})
export class BodyCardsPhonesComponent implements OnInit {

  public _buscador:string = "";
  private _phoneList:Phone[] = [];
  private _phoneListDisplayed:Phone[] = [];
  @Input() _display:string = "";

  constructor(private phoneService:PhoneService) {
    
   }

  ngOnInit(): void {
      this.getPhoneList();
  }

  getPhoneList() {
    this.phoneService.getPhoneList().then(o=>o.forEach(phoneList=>{
      this._phoneList = phoneList;
      this._phoneListDisplayed = phoneList;
    }))
  }
  
  searchByBrand($event: KeyboardEvent) {
    if (this.buscador == "") {
      this.getPhoneList();
    }else{
      this.phoneService.getPhoneListByBrand(this.buscador).then(e => e.forEach(phoneList=>this._phoneListDisplayed = phoneList))
    }
  }

  public get buscador(){
    return this._buscador;
  }

  public set buscador(text:string){
    this.buscador = text;
  }

  public get phoneList(){
    return this._phoneList;
  }

  public get phoneListDisplayed(){
    return this._phoneListDisplayed;
  }

  public set phoneListDisplayed(phoneList:Phone[]){
    this._phoneListDisplayed = phoneList;
  }

}
