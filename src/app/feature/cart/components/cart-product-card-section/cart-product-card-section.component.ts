import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/shared/interfaces/order/item';

@Component({
  selector: 'app-cart-product-card-section',
  templateUrl: './cart-product-card-section.component.html',
  styleUrls: ['./cart-product-card-section.component.scss']
})
export class CartProductCardSectionComponent implements OnInit {

  @Input() itens: Array<Item> = []
  @Output() removeItemEmitter = new EventEmitter<Item>;

  constructor() { 
  }

  ngOnInit(): void {
  }

  getItemToRemove(evt: Item){
    this.removeItemEmitter.emit(evt);
  }
}
