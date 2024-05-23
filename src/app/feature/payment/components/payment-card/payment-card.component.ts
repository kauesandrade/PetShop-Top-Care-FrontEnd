import { Component, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/payment/card';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss'],
})
export class PaymentCardComponent implements OnInit {
  page = 'card';
  card: Card = this.paymentService.card;

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {}

  selectSavedCard() {
    this.page = 'select';
    this.paymentService.setBlankCard();
  }

  selectCard(card: Card) {
    this.page = 'card';
    this.card = card;
  }
}
