import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faBaseballBall, faChevronDown, faReceipt, faBriefcase, faTable, faUser } from '@fortawesome/free-solid-svg-icons';

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
  sideBarOpen: boolean | undefined;
  innerWidth: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(!this.isOpen){
      this.id = this.idPage;
    }
  }

  ngOnInit(): void {}

  isHovered: boolean = false;
  @Input() idPage = '1'
  id = '1'
  size = 'small'
  @Input() isOpen:boolean = false


  clickedBtn(evt: any){
   this.id = evt
  }

  hoverSideBar(evt: string){

    if(this.innerWidth >= 1440){
      this.size = '';
    }
    else{
      this.size = evt;
    }

    if(evt == 'small' && !this.isOpen){
      this.id = this.idPage;
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
