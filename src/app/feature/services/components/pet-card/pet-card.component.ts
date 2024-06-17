import { Component, Input, OnInit } from '@angular/core';
import {
  faCat,
  faDog,
  faDove,
  faDragon,
  faFish,
  faFrog,
  faHandLizard,
  faMale,
  faMouse,
  faOtter,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {
  @Input() pet!: string;
  icon?: IconDefinition;
  iconImage?: string;

  constructor() {}

  ngOnInit(): void {
    this.defineIcon(this.pet);
  }

  defineIcon(pet: string) {
    switch (pet) {
      case 'Cachorro':
        this.icon = faDog;
        break;
      case 'Gato':
        this.icon = faCat;
        break;
      case 'Aves':
        this.icon = faDove;
        break;
      case 'Roedores':
        this.iconImage =
          'https://cdn2.iconfinder.com/data/icons/mammals-ii/300/10-64.png';
        break;
      case 'Répteis':
        this.iconImage =
          'https://cdn0.iconfinder.com/data/icons/sea-food-lobster-shellfish-octopus-1/66/20-64.png';
        break;
      case 'Primatas':
        this.iconImage =
          'https://cdn3.iconfinder.com/data/icons/monkey/100/monkey-70-64.png';
        break;
      default:
        this.icon = faFish;
        break;
    }
  }
}
