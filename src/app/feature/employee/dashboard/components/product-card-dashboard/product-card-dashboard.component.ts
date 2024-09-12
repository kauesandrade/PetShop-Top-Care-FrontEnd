import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductResponseCard } from 'src/app/shared/interfaces/product/product';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-card-dashboard',
  templateUrl: './product-card-dashboard.component.html',
  styleUrls: ['./product-card-dashboard.component.scss']
})
export class ProductCardDashboardComponent implements OnInit {

  faTrash = faTrash

  @Input() product!: ProductResponseCard;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  handleClickTrash(){
    this.productService.deleteProduct(this.product.code).subscribe(() => {
      window.location.reload();
    });
  }

}
