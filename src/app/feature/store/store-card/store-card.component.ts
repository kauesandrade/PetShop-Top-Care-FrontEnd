import { Component, Input, OnInit } from '@angular/core';
import { StoreCard } from '../interfaces/store-card';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() store: StoreCard = {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-D_dE33FFe8BA-ejROqrhBClDmglc3oZkTOZR6fqv_Q&s",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-D_dE33FFe8BA-ejROqrhBClDmglc3oZkTOZR6fqv_Q&s",
    name: "TopCare Jaraguá do Sul",
    location: "Av. Barão do Rio Branco, Nº 5102",
    number: "(99) 9 9999-9999",
    opening_hours: "7:00 ás 22:00",
    services: [
      "Banho e Tosa",
      "Consulta Veterinária",
      "Adoção"
    ],
    products_offered: "Animais Domésticos",
  };

}
