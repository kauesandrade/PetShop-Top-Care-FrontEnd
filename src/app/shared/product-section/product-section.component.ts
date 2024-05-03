import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent {
  @Input() title: string = '';
  @Input() productList!: Product[];
  @Input() category!: Array<String> | string;

  constructor() {}
}
