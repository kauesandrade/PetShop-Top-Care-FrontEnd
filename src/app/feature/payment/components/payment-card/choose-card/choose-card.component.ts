import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/payment/card';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-choose-card',
  templateUrl: './choose-card.component.html',
  styleUrls: ['./choose-card.component.scss'],
})
export class ChooseCardComponent implements OnInit {
  userCards: Card[] = [];

  @Output() onCardSelect = new EventEmitter<Card>();

  constructor(
    private userService: UserService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    if (this.userService.loggedUser?.cards) {
      this.userCards = this.userService.loggedUser?.cards;
    }
    console.log(this.userCards);
  }

  selectCard(card: Card) {
    this.onCardSelect.emit(card);
    this.paymentService.setCard(card);
  }
}
