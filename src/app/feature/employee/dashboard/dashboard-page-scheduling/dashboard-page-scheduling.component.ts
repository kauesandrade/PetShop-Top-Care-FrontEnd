import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page-scheduling',
  templateUrl: './dashboard-page-scheduling.component.html',
  styleUrls: ['./dashboard-page-scheduling.component.scss']
})
export class DashboardPageSchedulingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen: boolean = false;
  sideBarOpen(evt: any){
      this.isOpen = evt;
    }
  
}
