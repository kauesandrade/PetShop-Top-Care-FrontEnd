import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { CartPaymentInformations } from 'src/app/shared/interfaces/order/cart-payment-informations';
import { Order } from 'src/app/shared/interfaces/order/order';
import { Payment } from 'src/app/shared/interfaces/payment/payment';
import { Shipping } from 'src/app/shared/interfaces/shipping/shipping';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss'],
})
export class PaymentInformationComponent implements OnInit {
  @Input() paymentMethod = 'Cartão';
  paymentInformation!: CartPaymentInformations;

  openAddresses: boolean = false;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paymentInformation = this.cartService.cartInformations;
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

    const newDate = new Date(
      today + this.paymentInformation.shippingType?.time! * 24 * 60 * 60 * 1000
    );
    const expectedDate = new Date(today + 6 * 24 * 60 * 60 * 1000);

    let expectedDateFormatted = '';

    let day = expectedDate.getDate();
    expectedDateFormatted += day >= 10 ? day : `0${day}`;

    let month = expectedDate.getMonth() + 1;
    expectedDateFormatted += month >= 10 ? month : `0${month}`;

    expectedDateFormatted += expectedDate.getFullYear();

    return expectedDateFormatted;
  }

  generatePaymentMethod() {
    console.log(this.paymentMethod);
    if (this.paymentMethod == 'Pix') {
      return {
        value: 'pix',
        copyPasteCode: '123123123123',
        qrCode: '123123123213123123123',
        expirationInterval: 1,
      };
    } else if (this.paymentMethod == 'Boleto') {
      return {
        value: 'bankSlip',
        slip: '12312312312313',
        expirationInterval: 2,
      };
    } else {
      return {
        value: 'card',
        name: 'Bernardo',
        lastDigits: '9875',
        expirationDate: '1001',
        mainCard: false,
      };
    }
  }

  generatePayment(): Payment {
    return {
      subtotal: this.paymentInformation.partialPrice!,
      shippingFee: this.paymentInformation.shippingType?.price!,
      total: this.paymentInformation.totalPrice!,
      method: this.generatePaymentMethod(),
      parcels: this.paymentInformation.parcelsNumber!,
      status: 'Em preparo',
    };
  }

  generateShipping(): Shipping {
    return {
      shippingType: this.paymentInformation.shippingType,
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

  finishPayment() {
    let newOrder: Order = {
      orderCode: 11872635,
      items: this.cartService.itensCart,
      address: this.paymentInformation.address!,
      expectedDate: this.calculateExpectedDate(),
      payment: this.generatePayment(),
      orderDate: this.generateOrderDate(),
      status: 'Em preparo',
      shipping: this.generateShipping(),
    };

    console.log(newOrder);

    this.orderService.createOrder(newOrder);
    this.router.navigate([
      this.router.url + '/finalizado/' + newOrder.orderCode,
    ]);
  }
}
