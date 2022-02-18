import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Phone } from '../interfaces/phone';
import { Response } from '../interfaces/response';
import { GraphService } from '../services/graph.service';
import { PhoneService } from '../services/phone-service.service';
import { PhonesIdCompareService } from '../services/phones-id-compare.service';

@Component({
  selector: 'app-dialog-compare-phones',
  templateUrl: './dialog-compare-phones.component.html',
  styleUrls: ['./dialog-compare-phones.component.css']
})
export class DialogComparePhonesComponent implements OnInit {

  constructor(public dialogRed:MatDialogRef<DialogComparePhonesComponent>,
    @Inject(MAT_DIALOG_DATA) public phonesIdCompare:Phone[], private phoneIdService:PhonesIdCompareService
    , private graphService:GraphService) {
      
  }

  ngOnInit(): void {
    this.graphService.parseToJsonGraph(this.phonesIdCompare)
  }

  emptyListPhone(){
    this.phoneIdService.emptyList();
  }

}
