import { Component, OnInit } from '@angular/core';
import { faPercent, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.scss']
})
export class CartProductCardComponent implements OnInit {

  faTrash = faTrash;
  faPercent = faPercent;

  constructor() { }

  ngOnInit(): void {
  }

}
