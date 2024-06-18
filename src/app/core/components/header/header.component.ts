import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() simple: boolean = false;
  @Input() employee: boolean = false

  @Output() sideBarOpenEmitter = new EventEmitter<boolean>()

  constructor() {}

  sideBarOpen(evt: any){
    this.sideBarOpenEmitter.emit(evt);
  }
}
