import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faBaseballBall, faChevronDown, faReceipt, faBriefcase, faTable, faUser, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-dashboard-side-bar',
  templateUrl: './dashboard-side-bar.component.html',
  styleUrls: ['./dashboard-side-bar.component.scss']
})
export class DashboardSideBarComponent implements OnInit, OnChanges {

  faBaseballBall = faBaseballBall;
  faChevronDown = faChevronDown;
  faReceipt = faReceipt;
  faBriefcase = faBriefcase;
  faTable = faTable;
  faUser = faUser;
  faHome = faHome;
  faSignOutAlt = faSignOutAlt;

  sideBarOpen: boolean | undefined;
  innerWidth: any;

  @Input() pageNow: string = '' ;
  @Input() isOpen:boolean = false;

  isHovered: boolean = false;
  page: string  = '';
  size = 'small';

  constructor(protected userService: UserService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.isOpen){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
      this.page = this.pageNow;
    }
    
  }

  ngOnInit(): void {
    this.onResize();
    this.page = this.pageNow;
  }


  clickedBtn(evt: string){
   this.page = evt
  }

  handleClickLogout(){
    this.userService.logout();
  }

  hoverSideBar(evt: string){

    if(this.innerWidth >= 1440){
      this.size = '';
    }
    else{
      this.size = evt;
    }

    if(evt == 'small' && !this.isOpen){
      this.page = this.pageNow;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;

    if(this.innerWidth >= 1440){
      this.size = '';
    }else{
      this.size = 'small';
    }
  }


}
