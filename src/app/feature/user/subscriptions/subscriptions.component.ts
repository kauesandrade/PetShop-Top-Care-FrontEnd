import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'src/app/shared/interfaces/order/subscription';
import { OrderByService } from 'src/app/shared/services/orderBy/order-by.service';
import { SubscriptionService } from 'src/app/shared/services/subscription/subscription.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnInit, OnChanges {
  orderByOptions = ['Próxima Entrega', 'Última Entrega'];

  userSubscriptions: Subscription[] = [];

  constructor(
    private orderByService: OrderByService,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.updateSubscriptions();
  }

  ngOnInit(): void {
    this.updateSubscriptions();
  }

  updateSubscriptions() {
    if (this.subscriptionService.subscriptions) {
      this.userSubscriptions = this.subscriptionService.getSubscriptions();
    }
  }

  orderSubscriptions(orderBy: string) {
    this.userSubscriptions = this.orderByService.orderSubscriptionsBy(
      orderBy,
      this.userSubscriptions
    );
  }
}
