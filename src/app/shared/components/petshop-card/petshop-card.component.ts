import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Petshop } from '../../interfaces/petshop/petshop';

@Component({
  selector: 'app-petshop-card',
  templateUrl: './petshop-card.component.html',
  styleUrls: ['./petshop-card.component.scss'],
})
export class PetshopCardComponent implements OnInit {
  @Input() type: 'view' | 'checkbox' = 'checkbox';
  @Input() petshop!: Petshop;

  @Input() selectedPetshop?: Petshop;
  @Output() selectedPetshopChange = new EventEmitter<Petshop | undefined>();

  constructor() {}

  ngOnInit(): void {}

  changeInputRadio() {
    if (this.selectedPetshop?.id == this.petshop?.id) {
      this.selectedPetshopChange.emit(undefined);
    } else {
      this.selectedPetshopChange.emit(this.petshop);
    }
  }
}
