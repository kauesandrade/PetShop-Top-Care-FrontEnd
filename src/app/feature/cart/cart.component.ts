import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Item } from 'src/app/shared/interfaces/order/item';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  itens: Array<Item> = []
  openAddresses: boolean = false;
  
  constructor(private cartService: CartService) { 
    this.cartService.getItens().subscribe(data =>{
      this.itens = data
    });
  }
  
  ngOnInit(): void {
  }

  openAddressModal(){
    this.openAddresses ? this.openAddresses = false : this.openAddresses = true
  }

}
