import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/shared/interfaces/order/item';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart-product-card-section',
  templateUrl: './cart-product-card-section.component.html',
  styleUrls: ['./cart-product-card-section.component.scss']
})
export class CartProductCardSectionComponent implements OnInit {

  itens: Array<Item> = []

  constructor(private cartService: CartService) { 
    this.cartService.getItens().subscribe(data =>{
      this.itens = data
    });
  }

  ngOnInit(): void {
  }

  getItemToRemove(evt: Item){
   this.cartService.removeItemCart(evt);
  }
}
