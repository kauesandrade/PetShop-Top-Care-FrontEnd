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
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-edit-cards',
  templateUrl: './edit-cards.component.html',
  styleUrls: ['./edit-cards.component.scss'],
})
export class EditCardsComponent implements OnInit, OnChanges {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Output() changedPassword = new EventEmitter();

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  faPlus = faPlus;
  faTrash = faTrashAlt;

  user = this.userService.loggedUser!;

  editCardsForm = this.formBuilder.group({
    cards: this.formBuilder.array([]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.initCards();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
  }

  get cards() {
    return this.editCardsForm.get('cards') as FormArray;
  }

  getName(index: number) {
    return (<FormGroup>this.cards.controls[index]).get('name');
  }
  getLastDigits(index: number) {
    return (<FormGroup>this.cards.controls[index]).get('lastDigits');
  }
  getExpirationDate(index: number) {
    return (<FormGroup>this.cards.controls[index]).get('expirationDate');
  }
  getMainCard(index: number) {
    return (<FormGroup>this.cards.controls[index]).get('mainCard');
  }

  initCards() {
    if (this.user.cards.length > 0) {
      for (let card of this.user.cards) {
        this.createCard(card);
      }
    }
  }

  addNewCard(e: Event) {
    e.preventDefault();
    this.createNewCard();
  }

  createCard(card: Card) {
    this.cards.push(
      this.formBuilder.group({
        name: [card.name, [Validators.required, EmptyValidator]],
        lastDigits: [card.lastDigits, [Validators.required, EmptyValidator]],
        expirationDate: [
          card.expirationDate,
          [Validators.required, EmptyValidator],
        ],
        mainCard: [card.mainCard],
      })
    );
  }

  createNewCard() {
    this.cards.push(
      this.formBuilder.group({
        name: ['', [Validators.required, EmptyValidator]],
        lastDigits: ['', [Validators.required, EmptyValidator]],
        expirationDate: ['', [Validators.required, EmptyValidator]],
        mainCard: [false],
      })
    );
  }

  deleteCard(e: Event, i: number) {
    e.preventDefault();
    this.cards.removeAt(i);
  }

  updateUserCards() {
    this.user.cards = [];
    if (this.editCardsForm.value.cards) {
      for (let i = 0; i < this.editCardsForm.value.cards.length; i++) {
        let card: Card = this.editCardsForm.value.cards[i] as Card;
        this.user.cards.push(card);
      }
    }
  }

  isOpen() {
    if (this.open) {
      document.body.style.overflow = 'hidden';
      this.modal.nativeElement.showModal();
    }
  }

  resetMainCards(index: number) {
    if (this.getMainCard(index)?.value) {
      for (let i = 0; i < this.cards.length; i++) {
        if (index != i) {
          this.getMainCard(i)?.setValue(false);
        }
      }
    }
  }

  onClose(e: Event) {
    e.preventDefault();
    this.closeModal();
    this.cards.clear();
    this.initCards();
  }

  closeModal() {
    this.modal.nativeElement.close();
    this.open = false;
    this.openChange.emit(this.open);
    document.body.style.overflow = 'auto';
  }

  isFormValid() {
    return this.editCardsForm.valid;
  }

  onSubmit() {
    this.updateUserCards();
    this.userService.updateUser(this.user);
    this.closeModal();
  }
}
