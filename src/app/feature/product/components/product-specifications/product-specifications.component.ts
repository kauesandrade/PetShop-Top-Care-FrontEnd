import { Component, Input, OnInit } from '@angular/core';
import { SpecificationProduct } from 'src/app/shared/interfaces/specification-product';

@Component({
  selector: 'app-product-specifications',
  templateUrl: './product-specifications.component.html',
  styleUrls: ['./product-specifications.component.scss']
})
export class ProductSpecificationsComponent implements OnInit {

  constructor() { }

  @Input() specifications?: Array<SpecificationProduct>

  ngOnInit(): void {
  }

}
