import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
  editingCard!: Card;
  cardIndex!: number;

  @Output() onCardSelect = new EventEmitter<Card>();

  faPlus = faPlus;

  openAddCard = false;

  constructor(
    private userService: UserService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    if (this.userService.loggedUser?.cards) {
      this.userCards = [...this.userService.loggedUser?.cards];
    }
    console.log(this.userCards);
  }

  addNewCard() {
    let card = {
      id: null,
      value: 'card',
      name: '',
      lastDigits: '',
      expirationDate: '',
      mainCard: false,
    };
    this.cardModal(card, this.userCards.length);
  }

  cardModal(card: Card, index: number) {
    console.log('deu erro dps');
    this.openAddCard = true;
    this.editingCard = card;
    this.cardIndex = index;
  }

  addCard([card, action]: [Card, string]) {
    if (action == 'add') {
      this.userCards.push(card);
    }

    let newUser = this.userService.loggedUser!;
    newUser.cards = this.userCards;

    this.userService.updateUser(newUser);
  }

  resetMainCards([index, value]: [number, boolean]) {
    for (let i = 0; i < this.userCards.length; i++) {
      this.userCards[i].mainCard = false;
    }

    if (value) {
      this.userCards[index].mainCard = true;
    } else {
      this.userCards[0].mainCard = true;
    }
  }

  selectCard(card: Card) {
    this.onCardSelect.emit(card);
    this.paymentService.setCard(card);
  }
}
