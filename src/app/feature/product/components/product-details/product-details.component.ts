import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faStar,
  faComment,
  faHeart,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartR } from '@fortawesome/free-regular-svg-icons';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() productVariants!: Array<ProductVariant>;
  @Output() productVariantstEmit = new EventEmitter<ProductVariant>();

  productVariant!: ProductVariant;

  faStar = faStar;
  faComment = faComment;
  faHeart = faHeartR;
  faShare = faShareAlt;

  like!: boolean;

  typeOfProducts?: string = 'Selecione o Tamanho: ';
  typesDivider?: Array<Array<ProductVariant>> = [];

  constructor() {}

  ngOnInit(): void {
    this.productVariant = this.productVariants[0];
    this.like = this.productVariants[0].favorite;
    this.like == true ? (this.faHeart = faHeart) : (this.faHeart = faHeartR);
    this.productVariantstEmit.emit(this.productVariant);
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

  chooseVariant(variant: ProductVariant) {
    if (variant != this.productVariant) {
      this.productVariant = variant;
      this.productVariantstEmit.emit(this.productVariant);
    }
  }
}
