import { Injectable } from '@angular/core';
import { api } from '../api/api';
import { HttpClient } from '@angular/common/http';
import { Card, CardRequestDTO } from '../../interfaces/payment/card';
import convertDateFrontToBack from 'src/app/core/utils/date-converters/front-to-back';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cardEnpoint = `${api}/card`;

  constructor(private httpClient: HttpClient) {}

  getCardsOfUser(userId: number) {
    return this.httpClient.get<Card[]>(`${this.cardEnpoint}/user/${userId}`);
  }

  updateCards(userId: number, userCards: Card[]) {
    let cardsToDelete: Card[] = [];
    this.getCardsOfUser(userId).subscribe((cards) => {
      console.log(userCards.length > cards.length);
      if (userCards.length > cards.length) {
        for (let i = 0; i < userCards.length; i++) {
          console.log(this.checkIfDeleted(cards, userCards[i]));
          if (this.checkIfDeleted(cards, userCards[i])) {
            cardsToDelete.push(userCards[i]);
            console.log(cardsToDelete);
          }

          if (userCards[i].id == null) {
            this.saveCard(userId, userCards[i]);
          } else {
            this.updateCard(userId, userCards[i]);
          }
        }
      } else {
        for (let i = 0; i < cards.length; i++) {
          if (userCards.length == 0) {
            cardsToDelete = cards;
            console.log(cardsToDelete);
          }
          if (userCards.length < i + 1) {
            break;
          }
          console.log(this.checkIfDeleted(cards, userCards[i]));

          if (this.checkIfDeleted(cards, userCards[i])) {
            cardsToDelete.push(userCards[i]);
            console.log(cardsToDelete);
          }

          if (userCards[i].id == null) {
            this.saveCard(userId, userCards[i]);
          } else {
            this.updateCard(userId, userCards[i]);
          }
        }
      }

      console.log(cardsToDelete);

      for (let card of cardsToDelete) {
        this.deleteCard(card.id!);
      }
    });
  }

  checkIfDeleted(cards: Card[], card: Card): any {
    if (card.id == null) {
      return false;
    }

    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i].id == card.id);
      if (cards[i].id == card.id) {
        return false;
      }
    }

    return true;
  }

  saveCard(userId: number, card: Card) {
    let dto: CardRequestDTO = {
      name: card.name,
      lastDigits: card.lastDigits,
      expirationDate: convertDateFrontToBack(card.expirationDate),
      mainCard: card.mainCard,
      userId: userId,
    };
    this.httpClient.post(`${this.cardEnpoint}`, dto).subscribe();
  }

  updateCard(userId: number, card: Card) {
    let dto: CardRequestDTO = {
      name: card.name,
      lastDigits: card.lastDigits,
      expirationDate: convertDateFrontToBack(card.expirationDate),
      mainCard: card.mainCard,
      userId: userId,
    };
    this.httpClient.put(`${this.cardEnpoint}/${card.id}`, dto).subscribe();
  }

  deleteCard(id: number) {
    this.httpClient.delete(`${this.cardEnpoint}/${id}`).subscribe();
  }
}
