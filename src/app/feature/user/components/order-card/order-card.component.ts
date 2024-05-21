import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faClock, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Order } from 'src/app/shared/interfaces/order/order';
import { Subscription } from 'src/app/shared/interfaces/order/subscription';
import { SubscriptionService } from 'src/app/shared/services/subscription/subscription.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() order?: Order;
  @Input() subscription?: Subscription;

  @Output() canceledSubscription = new EventEmitter();

  faClock = faClock;
  faTrash = faTrashAlt;

  constructor(
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {}

  openPage() {
    if (this.order) {
      this.router.navigate([`${this.router.url}/${this.order.orderCode}`]);
    }
  }

  cancelSubscription() {
    this.subscriptionService.cancelSubscription(
      this.subscription?.subscriptionCode!
    );
    this.canceledSubscription.emit();
  }
}
