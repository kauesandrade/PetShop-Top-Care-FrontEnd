import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/shared/interfaces/order/item';
import { Petshop } from 'src/app/shared/interfaces/petshop/petshop';
import { ServiceVariant } from 'src/app/shared/interfaces/services/service-variant';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  type: 'scheduling' | 'cart' = 'cart';

  cartItems?: Array<Item> = [];
  schedulingItems?: {
    petshop: Petshop;
    services: ServiceVariant[];
  };

  paymentMethod = 'Cartão';

  constructor(
    private router: Router,
    private cartService: CartService,
    private schedulingService: SchedulingService
  ) {}

  ngOnInit(): void {
    this.definePaymentType();

    if (this.type == 'cart') {
      this.cartItems = this.cartService.itensCart;
    } else {
      this.schedulingItems = {
        petshop: this.schedulingService.petshop!,
        services: this.schedulingService.services!,
      };
    }
  }

  definePaymentType() {
    if (this.router.url.includes('agendamento')) {
      this.type = 'scheduling';
    } else {
      this.type = 'cart';
    }
  }
}
