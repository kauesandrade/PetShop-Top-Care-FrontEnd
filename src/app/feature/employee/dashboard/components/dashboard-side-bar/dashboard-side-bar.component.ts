import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faBaseballBall, faChevronDown, faReceipt, faBriefcase, faTable, faUser, faHome } from '@fortawesome/free-solid-svg-icons';

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

  sideBarOpen: boolean | undefined;
  innerWidth: any;

  constructor() {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(!this.isOpen){
      document.body.style.overflow = 'auto';
      this.page = this.pageNow;
    }else{
      document.body.style.overflow = 'hidden';
    }
    
  }

  ngOnInit(): void {
    this.onResize();
    this.page = this.pageNow;
  }

  isHovered: boolean = false;
  @Input() pageNow: string = '' ;
  page: string  = ''
  size = 'small'
  @Input() isOpen:boolean = false


  clickedBtn(evt: string){
   this.page = evt
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
