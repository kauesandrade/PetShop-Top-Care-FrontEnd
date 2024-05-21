import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/interfaces/order/order';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  code!: number;
  order!: Order;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.code = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.verifyOrder(this.code);
  }

  private verifyOrder(code: number) {
    let orderValue = this.orderService.getOrder(this.code);
    if (orderValue == null) {
      this.router.navigate(['/perfil/pedidos']);
    } else {
      this.order = orderValue;
    }
  }

  cancelOrder() {
    this.orderService.cancelOrder(this.code);
    this.router.navigate(['/perfil/pedidos']);
  }
}
