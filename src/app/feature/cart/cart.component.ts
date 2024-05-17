import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/interfaces/order/item';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  itens: Array<Item> = []

  constructor(private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.itens = this.cartService.itensCart;
    console.log(this.itens);
  }

  getItemToRemove(evt: Item){
    this.cartService.removeItemCart(evt);
    this.itens = this.cartService.itensCart;
  }


}
