import { Component, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/payment/card';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss'],
})
export class PaymentCardComponent implements OnInit {
  page = 'Informações';
  card: Card = this.generateBlankCard();

  constructor() {}

  ngOnInit(): void {}

  generateBlankCard() {
    return {
      value: '',
      name: '',
      lastDigits: '',
      expirationDate: '',
      mainCard: false,
    };
  }

  selectSavedCard() {
    this.page = 'Cartões';
    this.card = this.generateBlankCard();
  }

  selectCard(card: Card) {
    this.page = 'Informações';
    this.card = card;
  }
}
