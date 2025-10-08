import { Injectable } from '@angular/core';
import { PaymentMethod } from '../../interfaces/payment/payment-method';
import { Card } from '../../interfaces/payment/card';
import { UserService } from '../user/user.service';
import { CartService } from '../cart/cart.service';
import { SchedulingService } from '../scheduling/scheduling.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  paymentMethod: PaymentMethod = {
    value: 'card',
  };

  type: 'scheduling' | 'cart' = 'cart';

  card!: Card;
  saveCard = false;

  cvv: number = 0;

  parcels = new Array<number>();
  parcelsNumber = 1;

  errors = true;

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private schedulingService: SchedulingService
  ) {
    this.initCard();
    this.defineParcels();
  }

  initCard() {
    if (this.userService.mainCard() != null) {
      this.card = this.userService.mainCard()!;
    } else {
      this.setBlankCard();
    }
  }

  setParcelsNumber(value: number) {
    this.parcelsNumber = value;
  }

  setParcels(parcels: Array<number>) {
    this.parcels = parcels;
  }

  defineParcels() {
    this.parcels = new Array<number>();
    if (this.type == 'cart' && this.cartService.cartInformations) {
      for (let i = 1; i <= this.parcelsNumber; i++) {
        this.parcels?.push(this.cartService.cartInformations.totalPrice! / i);
      }
    } else {
      for (let i = 1; i <= this.parcelsNumber; i++) {
        this.parcels?.push(this.schedulingService.servicesTotalSum() / i);
      }
    }
  }

  setCvv(cvv: number) {
    this.cvv = cvv;
  }

  setSaveCard(value: boolean) {
    this.saveCard = value;
  }

  setBlankCard() {
    this.card = {
      id: null,
      name: '',
      lastDigits: '',
      expirationDate: '',
      mainCard: false,
    };
  }

  setCard(card: Card) {
    this.card = card;
  }

  hasErrors() {
    if (this.errors) {
      return true;
    }
    return false;
  }

  setErrors(value: boolean) {
    this.errors = value;
  }

  checkCVV() {
    if (this.cvv !== 0) {
      return true;
    }
    return false;
  }

  resetPayment() {
    this.cvv = 0;
    if (this.userService.mainCard() !== null) {
      this.card = this.userService.mainCard()!;
    }
    this.parcels = [1, 1];
    this.parcelsNumber = 1;

    this.paymentMethod = {
      value: 'card',
      card: this.card,
    };
  }

  setPaymentMethod(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
  }
}
