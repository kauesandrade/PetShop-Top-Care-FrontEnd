import { Injectable } from '@angular/core';
import { api } from '../api/api';
import { HttpClient } from '@angular/common/http';
import { Card, CardRequestDTO } from '../../interfaces/payment/card';
import convertDateFrontToBack from 'src/app/core/utils/date-converters/front-to-back';
import convertDateBackToFront from 'src/app/core/utils/date-converters/back-to-front';

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
    try {
      this.getCardsOfUser(userId).subscribe((cards) => {
        for (let cardFront of userCards) {
          if (cardFront.id == null) {
            this.saveCard(userId, cardFront);
          } else if (cards.some((card) => card.id === cardFront.id)) {
            this.updateCard(userId, cardFront);
            cards = cards.filter((card) => card.id !== cardFront.id);
          }
        }

        for (let cardToDelete of cards) {
          this.deleteCard(cardToDelete.id!);
        }
      });
    } catch (error) {
      throw new Error('Erro ao atualizar cartões');
    }
  }

  saveCard(userId: number, card: Card) {
    let dto: CardRequestDTO = this.createDTO(userId, card);
    this.httpClient.post(`${this.cardEnpoint}`, dto).subscribe();
  }

  updateCard(userId: number, card: Card) {
    let dto: CardRequestDTO = this.createDTO(userId, card);
    this.httpClient.put(`${this.cardEnpoint}/${card.id}`, dto).subscribe();
  }

  deleteCard(id: number) {
    this.httpClient.delete(`${this.cardEnpoint}/${id}`).subscribe();
  }

  createDTO(userId: number, card: Card): CardRequestDTO {
    return {
      name: card.name,
      lastDigits: card.lastDigits,
      expirationDate: convertDateFrontToBack(card.expirationDate),
      mainCard: card.mainCard,
      userId: userId,
    };
  }
}
