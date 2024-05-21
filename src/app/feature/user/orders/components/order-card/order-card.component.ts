import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/interfaces/order/order';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() order!: Order;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openOrder() {
    this.router.navigate([`${this.router.url}/${this.order.orderCode}`]);
  }
}
