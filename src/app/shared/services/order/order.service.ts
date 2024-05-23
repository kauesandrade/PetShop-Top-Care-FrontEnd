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

  generateOrderDate() {
    let orderDate = '';
    let today = new Date();

    let day = today.getDate();
    orderDate += day >= 10 ? day : `0${day}`;

    let month = today.getMonth() + 1;
    orderDate += month >= 10 ? month : `0${month}`;

    orderDate += today.getFullYear();

    let hours = today.getHours();
    orderDate += hours >= 10 ? hours : `0${hours}`;
    let minutes = today.getMinutes();
    orderDate += minutes >= 10 ? minutes : `0${minutes}`;
    let seconds = today.getSeconds();
    orderDate += seconds >= 10 ? seconds : `0${seconds}`;

    return orderDate;
  }

  calculateExpectedDate() {
    let today = new Date().getTime();

    // const expectedDate = new Date(today
    //     + this.paymentInformation.typeShipping.time * 24 * 60 * 60 * 1000);
    const expectedDate = new Date(today + 6 * 24 * 60 * 60 * 1000);

    let expectedDateFormatted = '';

    let day = expectedDate.getDate();
    expectedDateFormatted += day >= 10 ? day : `0${day}`;

    let month = expectedDate.getMonth() + 1;
    expectedDateFormatted += month >= 10 ? month : `0${month}`;

    expectedDateFormatted += expectedDate.getFullYear();

    return expectedDateFormatted;
  }

  generateShipping(): Shipping {
    return {
      shippingBy: 'Azul',
      shippingCode: '6534',
      shippingStatus: [
        { value: 'Pedido', dateTime: this.generateOrderDate() },
        { value: 'Enviado para transportadora' },
        { value: 'Recebido pela transportadora' },
        { value: 'Mercadoria em trãnsito' },
        { value: 'Mercadoria em rota de entrega' },
        { value: 'Pedido entregue' },
      ],
    };
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

  createOrder(order: Order) {
    this.orders?.push(order);
  }
}
