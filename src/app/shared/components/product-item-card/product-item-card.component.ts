import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../interfaces/order/item';

@Component({
  selector: 'app-product-item-card',
  templateUrl: './product-item-card.component.html',
  styleUrls: ['./product-item-card.component.scss'],
})
export class ProductItemCardComponent implements OnInit {
  @Input() item!: Item;
  @Input() boxShadow: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getSubtotal() {
    return this.item.product.price * this.item.amount;
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
    return this.item.product.variant.toLowerCase() == value;
  }

  variantIncludes(value: string) {
    return this.item.product.variant.toLowerCase().includes(value);
  }

  openCard() {
    this.router.navigate([`/produto/${this.item.product.title}`]);
  }
}
