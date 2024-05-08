import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-header-main-full',
  templateUrl: './header-main-full.component.html',
  styleUrls: ['./header-main-full.component.scss'],
})
export class HeaderMainFullComponent implements OnInit {
  faBars = faBars;
  faSearch = faSearch;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;

  drawerIsOpen: boolean = false;
  isLogged!: boolean;
  user!: User | null;
  firstName!: string | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.loggedUser;
    if (this.user) {
      this.firstName = this.user?.name.split(' ')[0];
      this.isLogged = this.user?.name != null;
    }
  }

  toggleDrawer() {
    this.drawerIsOpen = !this.drawerIsOpen;
    if (this.drawerIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
