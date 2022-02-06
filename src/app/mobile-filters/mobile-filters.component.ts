import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-mobile-filters',
  templateUrl: './mobile-filters.component.html',
  styleUrls: ['./mobile-filters.component.css']
})
export class MobileFiltersComponent implements OnInit {

  valuePrizeMin:number = 0;
  valuePrizeMax:number = 400;
  valueProcessorCoreMin:number = 1;
  valueProcessorCoreMax = 8;
  valueClockRateMin:number = 0;
  valueClockRateMax:number = 4.5;
  valueRamMin:number = 0.5;
  valueRamMax:number = 4;
  valueScreenMin:number = 4;
  valueScreenMax:number = 7;
  
  optionsPrize:Options = {
    floor: this.valuePrizeMin
    ,ceil: this.valuePrizeMax,
    translate: (value:number)=>{
      return value + "€";
    }};
  optionsProcessor:Options = {
    floor: this.valueProcessorCoreMin
    ,ceil: this.valueProcessorCoreMax
    };
  optionsClockRateProcessor:Options = {
    floor: this.valueClockRateMin
    , ceil: this.valueClockRateMax
    , translate: (value:number)=>{
      return value + "Ghz";
    }
    ,step: 0.1
  };
  optionsRam:Options = {
    floor: this.valueRamMin
    , ceil: this.valueRamMax
    , translate: (value:number)=>{
      return value + "GB";
    }
    , step: 0.5
  };
  optionsScreen:Options = {
    floor: this.valueScreenMin
    , ceil: this.valueScreenMax
    , translate: (value:number)=>{
      return value + "''";
    }
    ,step: 0.01
  };

  constructor() { }

  ngOnInit(): void {
  }

}
