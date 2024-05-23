import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { Card } from 'src/app/shared/interfaces/payment/card';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit, OnChanges {
  card!: Card;
  parcels!: Array<number>;

  cardForm!: FormGroup;

  displayCard!: Card;

  @Output() selectSavedCard = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDisplayCard();
  }

  ngOnInit(): void {
    this.card = this.paymentService.card;

    this.parcels = this.paymentService.parcels || [1];

    this.cardForm = this.formBuilder.group({
      name: [this.card.name, [Validators.required, EmptyValidator]],
      lastDigits: [this.card.lastDigits, [Validators.required, EmptyValidator]],
      expirationDate: [
        this.card.expirationDate,
        [Validators.required, EmptyValidator],
      ],
      cvv: ['', [Validators.required, EmptyValidator]],
      parcels: [this.parcels[0]],
      mainCard: [this.card.mainCard],
    });

    this.updateDisplayCard();
  }

  updateDisplayCard() {
    this.displayCard = {
      name: this.name?.value!,
      lastDigits: this.lastDigits?.value!,
      expirationDate: this.expirationDate?.value!,
      mainCard: this.mainCard?.value!,
    };
  }

  saveCVV() {
    this.paymentService.setCvv(this.cvv?.value);
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
  get cvv() {
    return this.cardForm.get('cvv');
  }
  get mainCard() {
    return this.cardForm.get('mainCard');
  }

  chooseSavedCard() {
    this.selectSavedCard.emit();
  }

  checkFormErrors() {
    if (this.name?.errors) {
      return true;
    }
    if (this.lastDigits?.errors) {
      return true;
    }
    if (this.expirationDate?.errors) {
      return true;
    }
    if (this.cvv?.errors) {
      return true;
    }
    return false;
  }

  onFormInput() {
    this.updateDisplayCard();
    this.paymentService.setSaveCard(this.mainCard?.value);

    if (this.checkFormErrors()) {
      this.paymentService.setErrors(true);
    } else {
      this.paymentService.setErrors(false);
    }
  }
}
