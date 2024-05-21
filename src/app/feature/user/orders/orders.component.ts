import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order/order';
import { OrderByService } from 'src/app/shared/services/orderBy/order-by.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orderByOptions = [
    'Mais Recente',
    'Mais Antigo',
    'Maior Preço',
    'Menor Preço',
  ];

  userOrders: Order[] = [];

  constructor(
    private userService: UserService,
    private orderByService: OrderByService
  ) {}

  ngOnInit(): void {
    if (this.userService.loggedUser?.orders) {
      console.log(this.userService.loggedUser?.orders);

      this.userOrders = [...this.userService.loggedUser?.orders!];
    }
  }

  orderOrders(orderBy: string) {
    this.userOrders = this.orderByService.orderBy(orderBy, this.userOrders);
  }
}
