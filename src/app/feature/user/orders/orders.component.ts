import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order/order';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orderByOptions = [
    'Mais recente',
    'Mais antigo',
    'Maior preço',
    'Menor preço',
  ];

  userOrders: Order[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (this.userService.loggedUser?.orders) {
      this.userOrders = [...this.userService.loggedUser?.orders!];
    }
  }

  orderOrders(orderBy: string) {}
}
