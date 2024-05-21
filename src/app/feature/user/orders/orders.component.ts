import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order/order';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { OrderByService } from 'src/app/shared/services/orderBy/order-by.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit, OnChanges {
  orderByOptions = [
    'Mais Recente',
    'Mais Antigo',
    'Maior Preço',
    'Menor Preço',
  ];

  userOrders: Order[] = [];

  constructor(
    private orderByService: OrderByService,
    private orderService: OrderService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.updateOrders();
  }

  ngOnInit(): void {
    this.updateOrders();
  }

  updateOrders() {
    if (this.orderService.orders) {
      this.userOrders = this.orderService.orders;
    }
  }

  orderOrders(orderBy: string) {
    this.userOrders = this.orderByService.orderOrdersBy(
      orderBy,
      this.userOrders
    );
  }
}
