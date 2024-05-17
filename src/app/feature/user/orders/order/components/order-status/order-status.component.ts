import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order/order';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent implements OnInit {
  @Input() order!: Order;

  constructor() {}

  ngOnInit(): void {}
}
