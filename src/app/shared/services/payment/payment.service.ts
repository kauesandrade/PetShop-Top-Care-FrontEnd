import { Injectable } from '@angular/core';
import { PaymentMethod } from '../../interfaces/payment/payment-method';
import { Card } from '../../interfaces/payment/card';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  paymentMethod: PaymentMethod = {
    value: 'card',
  };

  card: Card = {
    value: 'card',
    name: '',
    lastDigits: '',
    expirationDate: '',
    mainCard: false,
  };

  constructor() {
    this.setBlankCard();
  }

  setBlankCard() {
    this.card = {
      value: this.paymentMethod.value,
      name: '',
      lastDigits: '',
      expirationDate: '',
      mainCard: false,
    };
  }

  setCard(card: Card) {
    this.card = card;
  }

  setPaymentMethod(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;

    if (paymentMethod.value === 'card') {
      this.setBlankCard();
    }
  }
}
