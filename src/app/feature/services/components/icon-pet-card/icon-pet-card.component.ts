import { Component, Input, OnInit } from '@angular/core';
import {
  faCat,
  faDog,
  faDove,
  faFish,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-pet-card',
  templateUrl: './icon-pet-card.component.html',
  styleUrls: ['./icon-pet-card.component.scss'],
})
export class IconPetCardComponent implements OnInit {
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
      case 'Pássaros':
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
      case 'Peixes':
        this.icon = faFish;
        break;
    }
  }
}
