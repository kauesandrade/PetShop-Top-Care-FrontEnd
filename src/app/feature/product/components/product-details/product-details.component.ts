import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {
  faStar,
  faComment,
  faHeart,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartR } from '@fortawesome/free-regular-svg-icons';
import { ProductVariantResponse } from 'src/app/shared/interfaces/product/product-variant';
import { ProductResponsePageDTO } from 'src/app/shared/interfaces/product/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: ProductResponsePageDTO;
  @Output() productVariantstEmit = new EventEmitter<ProductVariantResponse>();

  productVariant!: ProductVariantResponse;
  
  faStar = faStar;
  faComment = faComment;
  faHeart = faHeartR;
  faShare = faShareAlt;

  like: boolean = false;

  typeOfProducts?: string = 'Selecione o Tamanho: ';
  typesDivider?: Array<Array<ProductVariantResponse>> = [];

  constructor() {}

  ngOnInit(): void {
    this.productVariant = this.product.variants[0];
    this.like == true ? (this.faHeart = faHeart) : (this.faHeart = faHeartR);
    this.productVariantstEmit.emit(this.productVariant);
    console.log(this.product);
  }

  likeProduct() {
    if (this.like) {
      this.like = false;
      this.faHeart = faHeartR;
    } else {
      this.like = true;
      this.faHeart = faHeart;
    }
  }

  chooseVariant(variant: ProductVariantResponse) {
    if (variant != this.productVariant) {
      this.productVariant = variant;
      this.productVariantstEmit.emit(this.productVariant);
    }
  }
}
