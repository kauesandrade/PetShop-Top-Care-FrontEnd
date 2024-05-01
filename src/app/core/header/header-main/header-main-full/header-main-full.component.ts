import { Component } from '@angular/core';
import {
  faBars,
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-main-full',
  templateUrl: './header-main-full.component.html',
  styleUrls: ['./header-main-full.component.scss'],
})
export class HeaderMainFullComponent {
  faBars = faBars;
  faSearch = faSearch;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;

  drawerIsOpen: boolean = false;

  constructor() {}

  toggleDrawer() {
    this.drawerIsOpen = !this.drawerIsOpen;
    if (this.drawerIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
