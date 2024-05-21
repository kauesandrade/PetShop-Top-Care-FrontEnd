import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @Input() contactForm!: FormGroup;
  @Output() contactFormChange = new EventEmitter<FormGroup>();

  constructor() {}

  onInput() {
    this.contactFormChange.emit(this.contactForm);
  }

  get cellphone1() {
    return this.contactForm.get('cellphone1');
  }
  get cellphone2() {
    return this.contactForm.get('cellphone2');
  }
  get telephone1() {
    return this.contactForm.get('telephone1');
  }
  get telephone2() {
    return this.contactForm.get('telephone2');
  }
}
