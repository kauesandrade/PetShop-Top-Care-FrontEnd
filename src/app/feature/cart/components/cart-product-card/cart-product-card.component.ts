import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPercent, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/shared/interfaces/order/item';

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
    "Enviar a cada 30 dias",
    "Enviar a cada 14 dias",
    "Enviar a cada 7 dias",
    "Enviar a cada 1 dia",
    "Enviar a cada 1 ano"
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
    this.subtotal = this.item.product.price * this.item.amount;
  }

  changeTypesSubscription(evt: any){
    console.log(evt.value)
  }

  checked(){
    this.isChecked ? this.isChecked = false : this.isChecked = true;
    console.log(this.isChecked)
  }

  emitRemoveItem(){
    this.removeItemEmitter.emit(this.item);
  }

  getAmount(evt: number){
    this.item.amount = evt;
    this.subtotal = this.item.product.price * this.item.amount;
  }
}
