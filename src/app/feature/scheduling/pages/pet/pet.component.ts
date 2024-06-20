import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/shared/interfaces/pet/pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent implements OnInit {
  pets: Pet[] = [
    {
      id: 1,
      idColor: 'pet-green',
      image:
        'https://console.kr-asia.com/wp-content/uploads/2019/07/Dog-Shutterstock-Size-2.jpg',
      name: 'Rex',
      size: 'Médio',
      type: 'Cachorro',
      race: 'Labrador Retriever',
      gender: 'Macho',
      color: 'Amarelo',
      birth: '15052018',
      weight: 25.5,
    },
    {
      id: 2,
      idColor: 'pet-yellow',
      image:
        'https://console.kr-asia.com/wp-content/uploads/2019/07/Dog-Shutterstock-Size-2.jpg',
      name: 'Rex',
      size: 'Médio',
      type: 'Cachorro',
      race: 'Labrador Retriever',
      gender: 'Macho',
      color: 'Amarelo',
      birth: '15052018',
      weight: 25.5,
    },
    {
      id: 3,
      idColor: 'pet-blue',
      image:
        'https://console.kr-asia.com/wp-content/uploads/2019/07/Dog-Shutterstock-Size-2.jpg',
      name: 'Rex',
      size: 'Médio',
      type: 'Cachorro',
      race: 'Labrador Retriever',
      gender: 'Macho',
      color: 'Amarelo',
      birth: '15052018',
      weight: 25.5,
    },
  ];

  selectedIndex?: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onContinue() {
    console.log('XD');
  }
}
