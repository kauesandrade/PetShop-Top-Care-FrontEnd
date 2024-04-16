import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss'],
})
export class HeaderMainComponent {
  faBars = faBars;

  drawerIsOpen: boolean = false;

  constructor() {}

  toggleDrawer() {
    this.drawerIsOpen = !this.drawerIsOpen;
  }
}
