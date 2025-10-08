import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { addMonths, format } from 'date-fns';
import { MessageService } from 'primeng/api';
import convertDateBackToFront from 'src/app/core/utils/date-converters/back-to-front';
import { Card } from 'src/app/shared/interfaces/payment/card';
import { CardService } from 'src/app/shared/services/card/card.service';

@Component({
  selector: 'app-edit-cards',
  templateUrl: './edit-cards.component.html',
  styleUrls: ['./edit-cards.component.scss'],
})
export class EditCardsComponent implements OnInit, OnChanges {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  faPlus = faPlus;
  faTrash = faTrashAlt;

  userCards!: Card[];

  openCardModal = false;
  editingCard!: Card;
  cardIndex!: number;

  constructor(
    private cardService: CardService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getUserCards();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getUserCards();
    this.isOpen();
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

  cardModal(card: Card, index: number) {
    this.openCardModal = true;
    this.editingCard = card;
    this.cardIndex = index;
  }

  addNewCard() {
    let card = {
      id: null,
      name: '',
      lastDigits: '',
      expirationDate: '',
      mainCard: false,
    };
    this.cardModal(card, this.userCards.length);
  }

  deleteCard(i: number) {
    this.userCards.splice(i, 1);
  }

  addCard([card, action]: [Card, string]) {
    if (action == 'add') {
      this.userCards.push(card);
    } else {
      this.userCards[this.cardIndex] = card;
    }
  }

  updateUserCards() {
    try {
      this.cardService.updateCards(1, this.userCards);
    } catch (e) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Erro ao salvar cartões',
      });
    }
  }

  editCard(card: Card, index: number) {
    this.cardModal(card, index);
  }

  isOpen() {
    if (this.open) {
      document.body.style.overflow = 'hidden';
      this.modal.nativeElement.showModal();
    }
  }

  getUserCards() {
    this.cardService.getCardsOfUser(1).subscribe((data) => {
      data.forEach((card) => {
        let date = new Date(card.expirationDate);
        date = addMonths(date, 1);
        card.expirationDate = format(date, 'MM/yy');
      });
      this.userCards = data;
    });
  }

  onClose() {
    this.getUserCards();
    this.closeModal();
  }

  closeModal() {
    this.modal.nativeElement.close();
    this.open = false;
    this.openChange.emit(this.open);
    document.body.style.overflow = 'auto';
  }

  onSubmit() {
    this.updateUserCards();
    this.closeModal();
  }
}
