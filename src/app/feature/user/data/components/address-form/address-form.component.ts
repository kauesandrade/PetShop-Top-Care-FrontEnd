import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent {
  @Input() addressForm!: FormArray;
  @Output() addressFormChange = new EventEmitter<FormArray>();

  constructor() {}
  onInput() {
    this.addressFormChange.emit(this.addressForm);
  }
}
