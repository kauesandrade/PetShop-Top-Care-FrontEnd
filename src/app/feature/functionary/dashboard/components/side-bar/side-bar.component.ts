import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { faBaseballBall, faChevronDown, faReceipt, faBriefcase, faTable } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  faBaseballBall = faBaseballBall;
  faChevronDown = faChevronDown;
  faReceipt = faReceipt;
  faBriefcase = faBriefcase;
  faTable = faTable;

  constructor() { }

  ngOnInit(): void {}

  isHovered: boolean = false;
  id = '1'
  side = 'close'

  clickedBtn(evt: any){
   this.id = evt
  }

  hoverSideBar(evt: string){
    this.side = evt
  }

}
