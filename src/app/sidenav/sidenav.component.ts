import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ChangeSizeNavTopAndBodyService } from '../services/change-size-nav-top-and-body.service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild("phoneListBody") phoneListBody!:ElementRef;
  public menuState:boolean = false;
  

  constructor(private changeSizeNavTopAndBody:ChangeSizeNavTopAndBodyService, private render:Renderer2) { }

  ngOnInit(): void {
  }

  closeNav() {
    this.menuState = !this.menuState;
    this.render.setStyle(this.phoneListBody.nativeElement,"width","100%")
  }

  openNav(){
    this.menuState = !this.menuState;
    this.render.setStyle(this.phoneListBody.nativeElement,"width","88%")
  }

}
