import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { Card } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Output() changedMainCard = new EventEmitter<number>();
  @Output() editedCard = new EventEmitter<[Card, string]>();

  @Input() card!: Card;
  @Input() index!: number;

  action = 'edit';

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  cardForm = this.formBuilder.group({
    name: ['', [Validators.required, EmptyValidator]],
    lastDigits: [0, [Validators.required, EmptyValidator]],
    expirationDate: ['', [Validators.required, EmptyValidator]],
    mainCard: [false],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen();
  }

  isOpen() {
    if (this.open) {
      document.body.style.overflow = 'hidden';
      this.modal.nativeElement.showModal();

      if (this.card.lastDigits == 0) {
        this.action = 'add';
      } else {
        this.action = 'edit';
      }

      this.cardForm = this.formBuilder.group({
        name: [this.card.name, [Validators.required, EmptyValidator]],
        lastDigits: [
          this.card.lastDigits,
          [Validators.required, EmptyValidator],
        ],
        expirationDate: [
          this.card.expirationDate,
          [Validators.required, EmptyValidator],
        ],
        mainCard: [this.card.mainCard],
      });
    }
  }

  get name() {
    return this.cardForm.get('name');
  }
  get lastDigits() {
    return this.cardForm.get('lastDigits');
  }
  get expirationDate() {
    return this.cardForm.get('expirationDate');
  }
  get mainCard() {
    return this.cardForm.get('mainCard');
  }

  selectMainCard() {
    this.changedMainCard.emit(this.index);
  }

  isFormValid() {
    return this.cardForm.valid;
  }

  onClose(e: Event) {
    e.preventDefault();
    this.closeModal();
    this.cardForm.reset();
  }

  closeModal() {
    this.modal.nativeElement.close();
    this.open = false;
    this.openChange.emit(this.open);
    document.body.style.overflow = 'auto';
  }

  updateCard() {
    this.card = {
      name: this.name?.value!,
      lastDigits: this.lastDigits?.value!,
      expirationDate: this.expirationDate?.value!,
      mainCard: this.mainCard?.value!,
    };
  }

  onSubmit() {
    this.closeModal();
    this.updateCard();
  }
}
