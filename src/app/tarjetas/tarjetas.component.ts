import { Component, OnInit,Input } from '@angular/core';
import { Phone } from '../interfaces/phone';
import { PhoneService } from '../services/phone-service.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() _phoneListDisplayed:Phone[] = [];

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  public get phoneListDisplayedInput() {
    return this._phoneListDisplayed;
  }

}
