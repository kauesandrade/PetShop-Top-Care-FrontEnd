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
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { Card } from 'src/app/shared/interfaces/card';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user/user.service';

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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userCards = [...this.userService.loggedUser?.cards!];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
  }

  resetMainCards([index, value]: [number, boolean]) {
    console.log(this.userCards);
    console.log(this.userService.loggedUser?.cards!);

    for (let i = 0; i < this.userCards.length; i++) {
      this.userCards[i].mainCard = false;
    }

    if (value) {
      this.userCards[index].mainCard = true;
    } else {
      this.userCards[0].mainCard = true;
    }

    console.log(this.userCards);
    console.log(this.userService.loggedUser?.cards!);
  }

  cardModal(card: Card, index: number) {
    this.openCardModal = true;
    this.editingCard = card;
    this.cardIndex = index;
  }

  addNewCard() {
    let card = {
      name: '',
      lastDigits: 0,
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
    let user = this.userService.loggedUser!;
    user.cards = this.userCards;
    this.userService.updateUser(user);
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

  onClose() {
    this.userCards = [...this.userService.loggedUser?.cards!];
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
