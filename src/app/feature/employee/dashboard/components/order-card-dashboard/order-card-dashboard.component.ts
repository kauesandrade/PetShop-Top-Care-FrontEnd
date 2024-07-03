import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Order } from 'src/app/shared/interfaces/order/order';

@Component({
  selector: 'app-order-card-dashboard',
  templateUrl: './order-card-dashboard.component.html',
  styleUrls: ['./order-card-dashboard.component.scss']
})
export class OrderCardDashboardComponent implements OnInit {

  faTrash = faTrash

  constructor() { }

  @Input() order!: Order;

  

  ngOnInit(): void {
  }

  handleClickNext(){
  }

  handleClickBack(){
  }
}
