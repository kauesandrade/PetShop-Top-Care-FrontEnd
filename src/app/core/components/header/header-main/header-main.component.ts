import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss'],
})
export class HeaderMainComponent {
  @Input() simple: boolean = false;
  @Input() employee: boolean = false
  @Output() sideBarOpenEmitter = new EventEmitter<boolean>()

  constructor() {}

  sideBarOpen(evt: any){
    this.sideBarOpenEmitter.emit(evt);
  }

}
