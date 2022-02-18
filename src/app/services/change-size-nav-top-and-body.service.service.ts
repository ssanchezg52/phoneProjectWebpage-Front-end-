import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeSizeNavTopAndBodyService {

  public $emiter = new EventEmitter();
  private _isOpen!:boolean;

  constructor() { }

  changeSizeEvent(isOpen:boolean){
    this._isOpen = isOpen;
    this.$emiter.emit();
  }

  public get isOpen(){
    return this._isOpen;
  }
}
