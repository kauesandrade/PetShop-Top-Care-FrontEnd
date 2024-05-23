import { Injectable } from '@angular/core';
import { PaymentMethod } from '../../interfaces/payment/payment-method';
import { Card } from '../../interfaces/payment/card';
import { UserService } from '../user/user.service';
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  paymentMethod: PaymentMethod = {
    value: 'card',
  };

  card!: Card;
  saveCard = false;

  cvv: number = 0;

  parcels = new Array<number>();
  parcelsNumber = 1;

  errors = true;

  constructor(
    private userService: UserService,
    private cartService: CartService
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

  defineParcels() {
    this.parcels = new Array<number>();
    for (
      let i = 1;
      i <= this.cartService.cartInformations.parcelsNumber!;
      i++
    ) {
      this.parcels?.push(this.cartService.cartInformations.totalPrice! / i);
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

  setPaymentMethod(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
    this.defineParcels();

    if (paymentMethod.value === 'card') {
      this.setBlankCard();
    }
  }
}
