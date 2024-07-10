import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartPaymentInformations } from 'src/app/shared/interfaces/order/cart-payment-informations';
import { Order } from 'src/app/shared/interfaces/order/order';
import { Payment } from 'src/app/shared/interfaces/payment/payment';
import { PaymentMethod } from 'src/app/shared/interfaces/payment/payment-method';
import { Petshop } from 'src/app/shared/interfaces/petshop/petshop';
import { Schedule } from 'src/app/shared/interfaces/schedule/schedule';
import { Service } from 'src/app/shared/interfaces/services/service';
import { Shipping } from 'src/app/shared/interfaces/shipping/shipping';
import { Address } from 'src/app/shared/interfaces/user/address';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';
import { SchedulingService } from 'src/app/shared/services/scheduling/scheduling.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss'],
})
export class PaymentInformationComponent implements OnInit {
  @Input() type: 'scheduling' | 'cart' = 'cart';
  paymentMethod: PaymentMethod = {
    value: 'card',
  };

  paymentInformation?: CartPaymentInformations;

  petshop?: Petshop;
  services?: Service[];
  servicesPaymentInformation?: {
    parcelsNumber: number;
    parcelsPrice: number;
  };

  openAddresses: boolean = false;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private paymentService: PaymentService,
    private userService: UserService,
    private schedulingService: SchedulingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.type == 'cart') {
      this.paymentInformation = this.cartService.cartInformations;
    } else {
      this.petshop = this.schedulingService.petshop!;
      this.services = this.schedulingService.services!;
      this.servicesPaymentInformation = {
        parcelsNumber: this.paymentService.parcelsNumber,
        parcelsPrice: 100,
      };
    }
  }

  servicesTotalSum() {
    return this.schedulingService.servicesTotalSum();
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
    this.paymentService.checkCVV();
    return {
      value: 'card',
      card: this.paymentService.card,
    };
  }

  generatePayment(): Payment {
    if (this.type == 'cart') {
      return {
        subtotal: this.paymentInformation?.partialPrice!,
        shippingFee: this.paymentInformation?.shippingType?.price!,
        total: this.paymentInformation?.totalPrice!,
        method: this.generatePaymentMethod(),
        parcels: this.paymentService.parcelsNumber,
        status: 'Em preparo',
      };
    } else {
      return {
        subtotal: this.schedulingService.servicesTotalSum(),
        total: this.schedulingService.servicesTotalSum(),
        method: this.generatePaymentMethod(),
        parcels: this.paymentService.parcelsNumber,
      };
    }
  }

  generateShipping(): Shipping {
    return {
      shippingType: this.paymentInformation?.shippingType,
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

  unformatDate(date: Date) {
    let dateStr = '';

    dateStr +=
      date.getDate() +
      '/' +
      (date.getMonth() + 1) +
      '/' +
      date.getFullYear() +
      ' - ' +
      date.getHours() +
      ':' +
      date.getMinutes();

    console.log(dateStr);

    return dateStr;
  }

  finishPayment() {
    this.paymentMethod = this.paymentService.paymentMethod;

    if (this.paymentService.hasErrors()) {
      console.log('XC');
      return;
    }

    if (this.paymentService.saveCard && this.userService.mainCard() == null) {
      let user = this.userService.loggedUser!;
      user?.cards.push(this.paymentService.card);

      this.userService.updateUser(user);
    }

    if (this.paymentService.paymentMethod.value == 'card') {
      if (!this.paymentService.checkCVV()) {
        return;
      }
    }

    if (this.type == 'cart') {
      let newOrder: Order = {
        orderCode: Math.floor(Math.random() * 100000),
        items: this.cartService.itensCart,
        address: this.paymentInformation?.address!,
        expectedDate: this.orderService.calculateExpectedDate(),
        payment: this.generatePayment(),
        orderDate: this.orderService.generateOrderDate(),
        status: 'Em preparo',
        shipping: this.orderService.generateShipping(),
      };

      this.orderService.createOrder(newOrder);

      this.paymentService.resetPayment();

      this.cartService.clearCart();

      this.router.navigate([
        this.router.url + '/finalizado/' + newOrder.orderCode,
      ]);
    } else {
      let newScheduling: Schedule = {
        code: Math.floor(Math.random() * 100000),
        dateTime: this.unformatDate(this.schedulingService.schedule!),
        payment: this.generatePayment(),
        petshop: this.schedulingService.petshop!,
        services: this.schedulingService.services!,
      };

      this.schedulingService.createSchedule(
        this.schedulingService.pet!,
        newScheduling
      );

      this.paymentService.resetPayment();

      this.schedulingService.clearScheduling();

      console.log(newScheduling);

      this.router.navigate([
        this.router.url + '/finalizado/' + newScheduling.code,
      ]);
    }
  }
}
