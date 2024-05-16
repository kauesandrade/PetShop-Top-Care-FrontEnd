import { Injectable } from '@angular/core';
import { Items } from '../../interfaces/order/items';
import { ProductVariant } from '../../interfaces/product/product-variant';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itensCart: Array<Items> = [];

  constructor() {
    this.itensCart =
      JSON.parse(localStorage.getItem('itensCart') || '""') == ''
        ? []
        : JSON.parse(localStorage.getItem('itensCart') || '""');
  }

  addItemCart(product: ProductVariant, amount: number) {
    const newItem: Items = {
      product,
      amount,
    };

    this.itensCart = [];
    this.itensCart =
      JSON.parse(localStorage.getItem('itensCart') || '""') == ''
        ? []
        : JSON.parse(localStorage.getItem('itensCart') || '""');
    let found: boolean = false;

    this.itensCart.forEach((product) => {
      if (
        product.product.variantCode == newItem.product.variantCode &&
        product.product.code == newItem.product.code
      ) {
        product.amount =
          product.amount + newItem.amount > 100
            ? (product.amount = 100)
            : product.amount + newItem.amount;
        found = true;
      }
    });

    if (!found) {
      this.itensCart.push(newItem);
    }

    localStorage.setItem('itensCart', JSON.stringify(this.itensCart));
  }
}
