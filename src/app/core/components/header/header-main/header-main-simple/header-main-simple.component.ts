import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/shared/interfaces/user/user';
import {
  faBars,
  faUser,
  faTimes,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-main-simple',
  templateUrl: './header-main-simple.component.html',
  styleUrls: ['./header-main-simple.component.scss'],
})
export class HeaderMainSimpleComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;
  faTimes = faTimes;
  faSignOutAlt = faSignOutAlt;

  @Input() employee: boolean = false;
  user!: User | null;
  firstName!: string | undefined;

  sideBarOpen: boolean = false;

  @Output() sideBarOpenEmitter = new EventEmitter<boolean>();

  private innerWidth: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.loggedUser;
    if (this.user) {
      this.firstName = this.user?.fullname?.split(' ')[0];
    }

    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 1023 && this.sideBarOpen) {
      this.toggleDrawer();
    }
  }

  toggleDrawer() {
    this.sideBarOpen = !this.sideBarOpen;
    this.sideBarOpenEmitter.emit(this.sideBarOpen);
  }

  handleClickLogout() {
    this.userService.logout();
  }
}
