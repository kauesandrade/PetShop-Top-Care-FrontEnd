import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/order/order';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: Order[] = [];

  constructor(private userService: UserService) {
    this.orders = this.getOrders();
  }

  findOrder(code: number) {
    if (this.orders?.length == 0) {
      return null;
    }

    for (let order of this.orders!) {
      if (order.orderCode == code) {
        return order;
      }
    }

    return null;
  }

  getOrder(code: number) {
    return this.findOrder(code);
  }

  getOrders() {
    if (this.orders.length > 0) {
      return this.orders;
    }
    if (this.userService.loggedUser?.orders) {
      return [...this.userService.loggedUser?.orders];
    }
    return [];
  }

  cancelOrder(code: number) {
    this.orders = this.orders?.filter((order) => order.orderCode != code);
    console.log(this.orders);
  }
}
