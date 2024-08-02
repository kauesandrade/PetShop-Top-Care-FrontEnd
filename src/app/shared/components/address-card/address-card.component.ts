import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../../interfaces/user/address';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent implements OnInit {
  @Input() address!: Address;

  @Input() selectedAddress?: Address;
  @Output() selectedAddressChange = new EventEmitter<Address | undefined>();

  constructor() {}

  ngOnInit(): void {}

  changeInputRadio() {
    if (this.selectedAddress?.cep == this.address?.cep) {
      this.selectedAddressChange.emit(undefined);
    } else {
      this.selectedAddressChange.emit(this.address);
    }
  }
}
