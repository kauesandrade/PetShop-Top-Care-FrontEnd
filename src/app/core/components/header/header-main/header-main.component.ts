import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss'],
})
export class HeaderMainComponent {
  @Input() simple: boolean = false;
  @Input() functionary: boolean = false

  constructor() {}
}
