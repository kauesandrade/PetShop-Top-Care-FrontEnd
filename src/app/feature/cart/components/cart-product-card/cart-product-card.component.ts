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
  subcriptionType: string = '';

  typesSubscriptions = [
    "30 dias",
    "14 dias",
    "7 dias",
    "1 dia",
    "1 ano"
  ]

  constructor(private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.subtotal = this.item.product.price * this.item.amount;
    (typeof this.item.subscription == "string") ? this.isChecked = true :  this.isChecked = false;
  }
  
  changeTypesSubscription(evt: any){
    this.item.subscription = evt.value;
    this.cartService.updateItem(this.item);
  }
  
  checked(){
    this.isChecked =  !this.isChecked;
    this.item.subscription ? this.item.subscription = undefined : this.item.subscription = "30 dias";
    this.cartService.updateItem(this.item);
  }

  emitRemoveItem(){
    this.cartService.removeItemCart(this.item);
  }

  getAmount(evt: number){
    this.item.amount = evt;
    this.cartService.updateItem(this.item);
    this.subtotal = this.item.product.price * this.item.amount;
  }
}
