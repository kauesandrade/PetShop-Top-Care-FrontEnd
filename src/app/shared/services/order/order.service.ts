import { Injectable } from '@angular/core';
import { Item } from '../../interfaces/order/item';
import { Order } from '../../interfaces/order/order';
import { Payment } from '../../interfaces/payment/payment';
import { Shipping } from '../../interfaces/shipping/shipping';
import { Address } from '../../interfaces/user/address';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'any',
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

  createOrder(
    orderCode: number,  
    items: Array<Item>, 
    address: Address, 
    expectedDate: string, 
    payment: Payment,
    orderDate: string,
    status: string,
    shipping: Shipping){

    const order: Order = {
      orderCode,
      items,
      address,
      expectedDate,
      payment,
      orderDate,
      status,
      shipping
    }

    this.orders?.push(order);
  }
}
