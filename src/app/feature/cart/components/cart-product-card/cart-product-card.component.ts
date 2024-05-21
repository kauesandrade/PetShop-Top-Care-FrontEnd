import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPercent, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/shared/interfaces/order/item';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.scss']
})
export class CartProductCardComponent implements OnInit {

  faTrash = faTrash;
  faPercent = faPercent;

  @Input() item!: Item;
  @Output() removeItemEmitter = new EventEmitter<Item>;

  isChecked: boolean = false;
  subtotal: number = 0

  typesSubscriptions = [
    "30 dias",
    "14 dias",
    "7 dias",
    "1 dia",
    "1 ano"
  ]

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subtotal = this.item.product.price * this.item.amount;
    this.item.subscription ? this.isChecked = true :  this.isChecked = false;
  }

  changeTypesSubscription(evt: any){
    this.item.subscription = evt
    this.cartService.updateItem(this.item);
  }

  checked(){
    this.isChecked ? this.isChecked = false : this.isChecked = true;
  }

  emitRemoveItem(){
    // this.removeItemEmitter.emit(this.item);
    this.cartService.removeItemCart(this.item);
  }

  getAmount(evt: number){
    this.item.amount = evt;
    this.cartService.updateItem(this.item);
    this.subtotal = this.item.product.price * this.item.amount;
  }
}
