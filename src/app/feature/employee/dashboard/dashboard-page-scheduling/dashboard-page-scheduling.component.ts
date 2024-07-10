import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/shared/interfaces/pet/pet';
import { Petshop } from 'src/app/shared/interfaces/petshop/petshop';
import { ServiceVariant } from 'src/app/shared/interfaces/services/service-variant';

@Component({
  selector: 'app-dashboard-page-scheduling',
  templateUrl: './dashboard-page-scheduling.component.html',
  styleUrls: ['./dashboard-page-scheduling.component.scss'],
})
export class DashboardPageSchedulingComponent implements OnInit {
  pet: Pet = {
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
    schedules: [],
  };
  petshop: Petshop = {
    id: 1,
    image:
      'https://www.eurodicas.com.br/wp-content/uploads/2019/01/pet-shop-em-portugal.jpg',
    name: 'Pet Lovers',
    address: '123 Rua Principal, Cidade',
    openingHours: ['Seg-Sex: 9h-18h', 'Sáb: 10h-16h', 'Dom: Fechado'],
    telephone: '+1 (123) 456-7890',
    offeredServices: ['Banho e Tosa', 'Hotel para Pets', 'Treinamento'],
    servedPets: ['Cães', 'Gatos', 'Pássaros'],
  };
  services: ServiceVariant[] = [
    {
      code: 1,
      image:
        'https://img.freepik.com/fotos-premium/rosto-de-close-up-de-cachorro-labradoodle-encaracolado-engracado-tosador-feminino-lavando-a-cabeca-com-xampu-na-banheira-no-salao-de-beleza-proprietario-de-mulher-irreconhecivel-lava-cuidadosamente-a-pele-do-animal-de-estimacao-no-banho-em-casa_482921-3961.jpg?w=740',
      title: 'Banho e Tosa',
      description: 'Deixe seu pequeno ou grandinho bem cheirosinho',
      category: 'Higiene',
      servedPets: ['Cachorro', 'Gato', 'Aves'],
      variantCode: 101,
      variantTitle: 'Banho Simples',
      price: 50.0,
    },
    {
      code: 1,
      image:
        'https://img.freepik.com/fotos-premium/rosto-de-close-up-de-cachorro-labradoodle-encaracolado-engracado-tosador-feminino-lavando-a-cabeca-com-xampu-na-banheira-no-salao-de-beleza-proprietario-de-mulher-irreconhecivel-lava-cuidadosamente-a-pele-do-animal-de-estimacao-no-banho-em-casa_482921-3961.jpg?w=740',
      title: 'Banho e Tosa',
      description: 'Deixe seu pequeno ou grandinho bem cheirosinho',
      category: 'Higiene',
      servedPets: ['Cachorro', 'Gato', 'Aves'],
      variantCode: 102,
      variantTitle: 'Tosa Completa',
      price: 80.0,
    },
  ];
  schedule: Date = new Date();

  username: string = 'Topolino da Silva';

  code: string = '877-9333123';

  constructor() {}

  ngOnInit(): void {}
  isOpen: boolean = false;
  sideBarOpen(evt: any) {
    this.isOpen = evt;
  }
}
