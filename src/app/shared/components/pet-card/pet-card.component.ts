import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Pet } from '../../interfaces/pet/pet';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {
  @Input() type: string = 'link';
  @Input() pet!: Pet;

  @Input() index!: number;

  @Input() scheduleSelected?: number;
  @Output() onScheduleSelected = new EventEmitter<number>();

  faPlus = faPlus;
  faCheck = faCheck;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    switch (this.type) {
      case 'add':
        this.router.navigate(['/perfil/pets/add']);
        break;
      case 'link':
        this.router.navigate(['/perfil/pets/' + this.pet.id]);
        break;
      case 'scheduling':
        this.onScheduleSelected.emit(this.index);
        break;
    }
  }
}
