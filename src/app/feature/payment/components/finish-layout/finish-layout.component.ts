import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/interfaces/order/order';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-finish-layout',
  templateUrl: './finish-layout.component.html',
  styleUrls: ['./finish-layout.component.scss']
})
export class FinishLayoutComponent implements OnInit {

  @Input() orderInformation?: Order;

  constructor(
    protected user: UserService, 
    private orderService: OrderService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  goToProfileOrder(){
    this.router.navigate(["/perfil/pedidos"]);
  }

  cancelOrder(){
    this.orderService.cancelOrder(this.orderInformation?.orderCode!);
    this.router.navigate(["/"]);
  }

}
