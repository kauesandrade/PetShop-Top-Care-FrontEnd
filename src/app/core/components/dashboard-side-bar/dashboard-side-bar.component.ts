import { Component, Input, OnInit } from '@angular/core';
import { faBaseballBall, faChevronDown, faReceipt, faBriefcase, faTable } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-side-bar',
  templateUrl: './dashboard-side-bar.component.html',
  styleUrls: ['./dashboard-side-bar.component.scss']
})
export class DashboardSideBarComponent implements OnInit {

  faBaseballBall = faBaseballBall;
  faChevronDown = faChevronDown;
  faReceipt = faReceipt;
  faBriefcase = faBriefcase;
  faTable = faTable;

  constructor() { }

  ngOnInit(): void {}

  isHovered: boolean = false;
  id = '1'
  size = 'small'
  @Input() isOpen = 'close'


  clickedBtn(evt: any){
   this.id = evt
  }

  hoverSideBar(evt: string){
    this.size = evt
  }

  clickToOpen(evt: string){
    this.isOpen = evt
  }

}
