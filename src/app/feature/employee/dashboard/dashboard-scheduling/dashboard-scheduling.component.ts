import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-scheduling',
  templateUrl: './dashboard-scheduling.component.html',
  styleUrls: ['./dashboard-scheduling.component.scss']
})
export class DashboardSchedulingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faSearch = faSearch;
  
  isOpen: boolean = false;
  seachValue: string = '';

  typesOrderBy = [
    "Nome (A-Z)",
    "Nome (Z-A)",
    "Maior Preço",
    "Menor Preço",
  ]

  sideBarOpen(evt: any){
    this.isOpen = evt;
  }

  handleClickSeach(){

  }

  getOrderBy(evt: any){
    console.log(evt);
  }

  verifyChar(evt: any){
    console.log(evt);
  }
}
