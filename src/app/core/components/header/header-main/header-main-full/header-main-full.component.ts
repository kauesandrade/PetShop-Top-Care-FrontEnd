import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBars,
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/shared/interfaces/user/user';
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
  firstName!: string | undefined;

  seachValue: string = '';

  constructor(private userService: UserService, private routing: Router) {}

  ngOnInit() {
    if (this.userService.loggedUser == null) {
      this.userService.updateLoggedUser();
    }
    if (this.userService.loggedUser != null) {
      this.firstName = this.userService.loggedUser?.fullname.split(' ')[0];
    }
  }

  handleClickSeach() {
    if (this.seachValue != '') {
      this.routing.navigate(['/busca'], {
        queryParams: { q: this.seachValue },
      });
      this.seachValue = '';
    }
  }

  verifyChar(evt: any) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode == 13) {
      this.handleClickSeach();
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
