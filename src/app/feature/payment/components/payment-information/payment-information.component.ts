import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartPaymentInformations } from 'src/app/shared/interfaces/order/cart-payment-informations';
import { Order } from 'src/app/shared/interfaces/order/order';
import { Payment } from 'src/app/shared/interfaces/payment/payment';
import { PaymentMethod } from 'src/app/shared/interfaces/payment/payment-method';
import { Shipping } from 'src/app/shared/interfaces/shipping/shipping';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss'],
})
export class PaymentInformationComponent implements OnInit {
  paymentMethod: PaymentMethod = {
    value: 'card',
  };
  paymentInformation!: CartPaymentInformations;

  openAddresses: boolean = false;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private paymentService: PaymentService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paymentInformation = this.cartService.cartInformations;
  }

  generatePaymentMethod() {
    if (this.paymentMethod.value == 'pix') {
      return {
        value: 'pix',
        pix: {
          copyPasteCode: '123123123123',
          qrCode: '123123123213123123123',
          expirationInterval: 1,
        },
      };
    } else if (this.paymentMethod.value == 'slip') {
      return {
        value: 'bankSlip',
        bankSlip: {
          slip: '12312312312313',
          expirationInterval: 2,
        },
      };
    }
    // this.paymentService.checkCVV();
    return {
      value: 'card',
      card: this.paymentService.card,
    };
  }

  generatePayment(): Payment {
    return {
      subtotal: this.paymentInformation.partialPrice!,
      shippingFee: this.paymentInformation.shippingType?.price!,
      total: this.paymentInformation.totalPrice!,
      method: this.generatePaymentMethod(),
      parcels: this.paymentService.parcelsNumber,
      status: 'Em preparo',
    };
  }

  generateShipping(): Shipping {
    return {
      shippingType: this.paymentInformation.shippingType,
      shippingBy: 'Azul',
      shippingCode: '6534',
      shippingStatus: [
        { value: 'Pedido', dateTime: this.orderService.generateOrderDate() },
        { value: 'Enviado para transportadora' },
        { value: 'Recebido pela transportadora' },
        { value: 'Mercadoria em trãnsito' },
        { value: 'Mercadoria em rota de entrega' },
        { value: 'Pedido entregue' },
      ],
    };
  }

  finishPayment() {
    this.paymentMethod = this.paymentService.paymentMethod;

    if (this.paymentService.hasErrors()) {
      return;
    }

    if (this.paymentService.saveCard) {
      let user = this.userService.loggedUser!;
      user?.cards.push(this.paymentService.card);

      this.userService.updateUser(user);
    }

    let newOrder: Order = {
      orderCode: Math.floor(Math.random() * 100000),
      items: this.cartService.itensCart,
      address: this.paymentInformation.address!,
      expectedDate: this.orderService.calculateExpectedDate(),
      payment: this.generatePayment(),
      orderDate: this.orderService.generateOrderDate(),
      status: 'Em preparo',
      shipping: this.orderService.generateShipping(),
    };

    console.log(newOrder);

    this.orderService.createOrder(newOrder);

    this.cartService.clearCart();

    this.router.navigate([
      this.router.url + '/finalizado/' + newOrder.orderCode,
    ]);
  }
}
