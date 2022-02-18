import { Component, OnInit,Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DialogInfoMobileComponent } from '../dialog-info-mobile/dialog-info-mobile.component';
import { Phone } from '../interfaces/phone';
import { Response } from '../interfaces/response';
import { GraphService } from '../services/graph.service';
import { PhoneService } from '../services/phone-service.service';
import { PhonesIdCompareService } from '../services/phones-id-compare.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TarjetasComponent implements OnInit {

  @Input() phoneListDisplayed!:Phone[];
  @ViewChild('card') card!:ElementRef;
  phoneSpecific$!:Observable<Response>;

  constructor(private phoneService:PhoneService, private dialog:MatDialog
    ,private phonesIdCompareService:PhonesIdCompareService,private snackBar:MatSnackBar
    ,private graphService:GraphService) {
    
  }

  ngOnInit(): void {

  } 

  clickCaptured(phone:Phone){
    this.graphService.parseToJsonGraph([phone]);
    this.dialog.open(DialogInfoMobileComponent, {
       height: '80vh',
      width: '80vw',
      data: phone
    });
  }

  clickComparation(event:Event,item:Phone){
    event.stopPropagation();
    this.phonesIdCompareService.addPhoneComparedId(item);
    if (this.phonesIdCompareService.isListLenghtEqualTwo()){
      this.snackBar.open("Se ha introducido en la lista de comparaciones, ya puedes comparar",undefined,{
        duration: 2000
      })
          
     }else{
      this.snackBar.open("Se ha introducido en la lista de comparaciones",undefined,{
        duration: 2000
      })
     }
  }

}
