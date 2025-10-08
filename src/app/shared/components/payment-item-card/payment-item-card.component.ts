import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../interfaces/order/item';
import { Service } from '../../interfaces/services/service';
import { ServiceVariant } from '../../interfaces/services/service-variant';

@Component({
  selector: 'app-payment-item-card',
  templateUrl: './payment-item-card.component.html',
  styleUrls: ['./payment-item-card.component.scss'],
})
export class PaymentItemCardComponent implements OnInit {
  @Input() type: 'scheduling' | 'cart' = 'cart';
  @Input() item?: Item;
  @Input() service?: ServiceVariant;
  @Input() boxShadow: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.service);
  }

  getSubtotal() {
    if (this.type == 'cart') {
      return this.item!.product.price * this.item!.amount;
    } else {
      return this.service?.price;
    }
  }

  defineVariant() {
    if (this.variantIs('p') || this.variantIs('m') || this.variantIs('g')) {
      return 'Tamanho';
    } else if (this.variantIncludes('g') || this.variantIncludes('kg')) {
      return 'Peso';
    } else if (this.variantIncludes('l') || this.variantIncludes('ml')) {
      return 'Volume';
    } else {
      return 'Cor';
    }
  }

  variantIs(value: string) {
    return this.item!.product.title.toLowerCase() == value;
  }

  variantIncludes(value: string) {
    return this.item!.product.title.toLowerCase().includes(value);
  }

  openCard() {
    if (this.type == 'cart') {
      this.router.navigate([`/produto/${this.item!.product.title}`]);
    }
  }
}
