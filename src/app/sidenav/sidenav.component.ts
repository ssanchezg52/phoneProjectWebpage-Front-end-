import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('navTop') navTop:ElementRef | undefined;
  public menuState:boolean = false;

  constructor(private render2:Renderer2) { }

  ngOnInit(): void {
  }

  eventNavDisplay() {
    this.menuState = !this.menuState;
    this.render2.setStyle(this.navTop?.nativeElement,"width","100%");
  }

  pruebaNav(){
    this.menuState = !this.menuState;
    this.render2.setStyle(this.navTop?.nativeElement,"width","88%");
  }

}
