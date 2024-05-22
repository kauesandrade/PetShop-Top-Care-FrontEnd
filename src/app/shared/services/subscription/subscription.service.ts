import { Injectable } from '@angular/core';
import { Subscription } from '../../interfaces/order/subscription';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  subscriptions: Subscription[] = [];

  constructor(private userService: UserService) {
    this.subscriptions = this.getSubscriptions();
  }

  findSubscription(code: number) {
    if (this.subscriptions?.length == 0) {
      return null;
    }

    for (let subscription of this.subscriptions!) {
      if (subscription.subscriptionCode == code) {
        return subscription;
      }
    }

    return null;
  }

  getSubscription(code: number) {
    return this.findSubscription(code);
  }

  getSubscriptions() {
    if (this.subscriptions.length > 0) {
      return this.subscriptions;
    }
    if (this.userService.loggedUser?.subscriptions) {
      return [...this.userService.loggedUser?.subscriptions];
    }
    return [];
  }

  cancelSubscription(code: number) {
    this.subscriptions = this.subscriptions?.filter(
      (subscription) => subscription.subscriptionCode != code
    );
    console.log(this.subscriptions);
  }
}
