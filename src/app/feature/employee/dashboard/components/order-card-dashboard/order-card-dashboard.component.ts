import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-card-dashboard',
  templateUrl: './order-card-dashboard.component.html',
  styleUrls: ['./order-card-dashboard.component.scss']
})
export class OrderCardDashboardComponent implements OnInit {

  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

  handleClickTrash(){

  }

  handleClickEdit(){
    
  }

}
