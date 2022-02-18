import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChangeSizeNavTopAndBodyService } from '../services/change-size-nav-top-and-body.service.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  @ViewChild('navTop') navTop:ElementRef | undefined;

  constructor(private changeSizeNavTopAndBodyService:ChangeSizeNavTopAndBodyService,private render2:Renderer2) { }

  ngOnInit(): void {
    this.changeSizeNavTopAndBodyService.$emiter.subscribe(emiter=>{
      this.changeSizeEvent();
    })
  }

  changeSizeEvent(){
    if (this.changeSizeNavTopAndBodyService.isOpen){
      this.render2.setStyle(this.navTop?.nativeElement,"width","88%");
    }else{
      this.render2.setStyle(this.navTop?.nativeElement,"width","100%");
    }
  }

}

