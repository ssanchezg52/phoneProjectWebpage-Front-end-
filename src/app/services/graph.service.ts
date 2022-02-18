import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Phone } from '../interfaces/phone';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private data:any[]=[];

  constructor() {
    
   }

   parseToJsonGraph(phonesCompare:Phone[]){
    this.data = [];
    let historicalJson:any[] = [];
    for(let i = 0;i < phonesCompare.length;i++){
      historicalJson = [];
      for (let k = 0; k < phonesCompare[i].priceHistory.length; k++) {
        historicalJson.push(
          {
            "name": phonesCompare[i].priceHistory[k].day.toString().substring(0,10),
            "value": phonesCompare[i].priceHistory[k].price
          }
        )
      }
      console.log(historicalJson)
      this.data.push(
        {
          "name": phonesCompare[i].brand + " " + phonesCompare[i].model,
          "series": historicalJson
        }
      )
    }
    return this.data;
   }

   getData(){
     return this.data;
   }
}
