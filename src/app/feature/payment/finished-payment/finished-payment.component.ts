import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartPaymentInformations } from 'src/app/shared/interfaces/order/cart-payment-informations';
import { Order } from 'src/app/shared/interfaces/order/order';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-finished-payment',
  templateUrl: './finished-payment.component.html',
  styleUrls: ['./finished-payment.component.scss']
})
export class FinishedPaymentComponent implements OnInit {

  id!: number;
  @Input() paymentMethod = 'Cartão';
  finishInformation?: Order ;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.id = Number(this.route.snapshot.paramMap.get("id")?.replace("%20", " "));
  }

  ngOnInit(): void {
    // typeof this.orderService.getOrder(this.id) == '"null"' ?  this.finishInformation = ;

     this.finishInformation = this.orderService.getOrder(this.id) || undefined


  }
}
