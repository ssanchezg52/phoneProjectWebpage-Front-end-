import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Phone } from '../interfaces/phone';

@Component({
  selector: 'app-dialog-info-mobile',
  templateUrl: './dialog-info-mobile.component.html',
  styleUrls: ['./dialog-info-mobile.component.css']
})
export class DialogInfoMobileComponent implements OnInit {

  constructor(public dialogRed:MatDialogRef<DialogInfoMobileComponent>,
    @Inject(MAT_DIALOG_DATA) public phone:Phone) {
      
  }

  ngOnInit(): void {

  }


}

