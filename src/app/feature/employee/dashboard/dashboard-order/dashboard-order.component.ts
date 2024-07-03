import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  typesOrderBy = [
    "Recentes",
    "Maior Quantidade de Itens",
    "Menor Quantidade de Itens",
    "Maior Preço",
    "Menor Preço",
    "Mais Perto do Destino",
    "Mais Longe do Destino",
  ]

  faSearch = faSearch;
  
  isOpen: boolean = false;
  seachValue: string = '';

  sideBarOpen(evt: any){
    this.isOpen = evt;
  }

  handleClickSeach(){

  }

  getOrderBy(evt: any){
    console.log(evt);
  }

  verifyChar(evt: any){
    console.log(evt);
  }
}
