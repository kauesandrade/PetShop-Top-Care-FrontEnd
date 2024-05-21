import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Order } from 'src/app/shared/interfaces/order/order';
import { Subscription } from 'src/app/shared/interfaces/order/subscription';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() order?: Order;
  @Input() subscription?: Subscription;

  faClock = faClock;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openOrder() {
    if (this.subscription) {
      this.router.navigate([
        `${this.router.url}/${this.subscription.subscriptionCode}`,
      ]);
    } else if (this.order) {
      this.router.navigate([`${this.router.url}/${this.order.orderCode}`]);
    }
  }
}
