import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
    this.size = evt;
    if(evt == 'small' && !this.isOpen){
      this.id = this.idPage;
    }

  }


}
