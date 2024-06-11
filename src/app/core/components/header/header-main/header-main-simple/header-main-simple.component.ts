import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/shared/interfaces/user/user';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-main-simple',
  templateUrl: './header-main-simple.component.html',
  styleUrls: ['./header-main-simple.component.scss']
})
export class HeaderMainSimpleComponent implements OnInit {

  faBars = faBars;
  faUser = faUser;

  @Input() functionary: boolean = false;
  user!: User | null;
  firstName!: string | undefined;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.user = this.userService.loggedUser;
    if (this.user) {
      this.firstName = this.user?.name?.split(' ')[0];
    }
  }

  toggleDrawer(){
    
  }


}
