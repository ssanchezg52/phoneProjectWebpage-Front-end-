import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../interfaces/phone';
import { PhoneService } from '../services/phone-service.service';
import { Response } from '../interfaces/response';
import { PhonesIdCompareService } from '../services/phones-id-compare.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComparePhonesComponent } from '../dialog-compare-phones/dialog-compare-phones.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenService } from '../services/token.service';
import { Token } from '../interfaces/token';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-body-cards-phones',
  templateUrl: './body-cards-phones.component.html',
  styleUrls: ['./body-cards-phones.component.css']
})
export class BodyCardsPhonesComponent implements OnInit {

  public search:string = "";
  phoneList:Phone[] = [];
  phoneListDisplayed$!:Observable<Response>;
  public page:number = 0;
  private readonly cardsLenght = 12;

  constructor(private phoneService:PhoneService,private phoneIdComparatedService:PhonesIdCompareService,
      private snackBar:MatSnackBar,private dialog:MatDialog,private tokenService:TokenService) {
    
   }

  ngOnInit(): void {
    this.getPhoneList();
  }

  getPhoneList() {
        this.phoneService.getPhoneListByPage(this.page,this.cardsLenght,this.tokenService.accessToken)
        .subscribe(
          response => {
            this.phoneList.push(...response.data.phoneListContent.content);
          },
          error => {
            this.tokenService.refreshToken();
          }
        )
        setTimeout(()=>{ 
        if (this.phoneList.length == 0){
            this.getPhoneList();
          };
        },80);
  }
  
  searchByBrand($event: KeyboardEvent) {
    this.page = 0;
    if (this.search == "") {
      this.phoneService.getPhoneListByPage(this.page,this.cardsLenght,this.tokenService.accessToken).subscribe((response)=>{
        this.phoneList = response.data.phoneListContent.content;
      })
    }else{
      this.phoneService.searchByBrand(this.search,this.page,this.tokenService.accessToken).subscribe((response)=>{
        this.phoneList = response.data.phoneListContent.content;  
      })
    }
  }

  compareButtonPressed(){
    if (this.phoneIdComparatedService.isListLenghtEqualTwo()){
      this.dialog.open(DialogComparePhonesComponent,{
        height: '80vh',
        width: '80vw',
        data: this.phoneIdComparatedService.phoneComparedId
      })
    }else{
      this.snackBar.open("No se puede comparar aun, elige dos moviles",undefined,{
        duration: 3*1000
      })
    }
  }

  loadMoreButtonPressed(){
    this.page++;
    if (this.search == ""){
      this.getPhoneList();
    }else{
      this.getPhoneListByBrand();
    }
  }

  getPhoneListByBrand(){
    this.phoneService.searchByBrand(this.search,this.page,this.tokenService.accessToken).subscribe((response)=>{
      this.phoneList.push(...response.data.phoneListContent.content);
    })
  }
}

