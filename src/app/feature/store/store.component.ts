import { Component, OnInit } from '@angular/core';
import { StoreCard } from './interfaces/store-card';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stores: Array<StoreCard> = [
    {
    imgSrc: "https://classic.exame.com/wp-content/uploads/2021/07/pet-shop-sao-paulo.jpg?quality=70&strip=info&w=1024",
    link: "",
    name: "TopCare Jaraguá do Sul - SC",
    location: "Av. Barão do Rio Branco, Nº 5102",
    number: "(99) 9 9999-9999",
    opening_hours: "7:00 ás 22:00",
    services: [
      "Banho e Tosa",
      "Consulta Veterinária",
      "Adoção"
    ],
    products_offered: "Animais Domésticos"
    },
    {
      imgSrc: "https://classic.exame.com/wp-content/uploads/2021/07/pet-shop-sao-paulo.jpg?quality=70&strip=info&w=1024",
      link: "",
      name: "TopCare Joinville - SC",
      location: "Av. Jetulio vargas, Nº 51",
      number: "(99) 9 9999-9999",
      opening_hours: "7:00 ás 21:00",
      services: [
        "Banho e Tosa",
        "Consulta Veterinária",
        "Adoção",
        "Hospital 24Hrs"
      ],
      products_offered: "Animais Domésticos"
    },
    {
      imgSrc: "https://classic.exame.com/wp-content/uploads/2021/07/pet-shop-sao-paulo.jpg?quality=70&strip=info&w=1024",
      link: "",
      name: "TopCare Jaraguá do Sul",
      location: "Av. Barão do Rio Branco, Nº 5102",
      number: "(99) 9 9999-9999",
      opening_hours: "7:00 ás 22:00",
      services: [
        "Banho e Tosa",
        "Consulta Veterinária",
        "Adoção"
      ],
      products_offered: "Animais Domésticos"
    },
      
    
  ]

}
