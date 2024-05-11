import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  seachValue: string = "";
  
  constructor(private userService: UserService, private routing: Router) {}
  
  ngOnInit() {
    this.userService.login("kaue@gmail.com", "cuz123");
    // this.userService.logout();
    this.user = this.userService.loggedUser;
    this.firstName = this.user?.name.split(' ')[0];
    this.isLogged = this.user?.name != null;
  }
  
  //https://stackblitz.com/edit/how-to-trigger-an-event-in-input-text-after-i-stop-typingwritin?file=src%2Fapp%2Fapp.component.ts see this before when will do the seachBar
  // changeSearchValue() {
  //   console.log(this.seachValue);
  // }

  handleClickSeach() {
    if(this.seachValue != ""){
      this.routing.navigate(
        ['/busca'],
        {
          queryParams: { q: this.seachValue },
        });
        this.seachValue = ""
    }
  }

  verifyChar(evt: any){
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
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
