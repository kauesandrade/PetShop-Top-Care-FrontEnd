import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/interfaces/order/item';

@Component({
  selector: 'app-product-item-section',
  templateUrl: './product-item-section.component.html',
  styleUrls: ['./product-item-section.component.scss'],
})
export class ProductItemSectionComponent implements OnInit {
  @Input() items!: Item[];

  constructor() {}

  ngOnInit(): void {}
}
