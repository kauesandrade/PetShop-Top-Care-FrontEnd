import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faStar, faComment, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartR } from '@fortawesome/free-regular-svg-icons';
import { TypeProduct } from 'src/app/shared/interfaces/type-product';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product?: Product;

  @Output() typeProductEmit = new EventEmitter<TypeProduct>;

  faStar = faStar;
  faComment = faComment;
  faHeart = faHeartR;
  faShare = faShareAlt;

  like?: boolean;

  typeOfProducts?: string = "Selecione o Tamanho: ";
  typesDivider?: Array<Array<TypeProduct>> = [];
  typeChoose?: TypeProduct;

  constructor() {}
  
  ngOnInit(): void {
    this.typeChoose = this.product?.type[0];
    this.dividerTypes();
    this.like = this.product?.favorite;
    this.like == true ? this.faHeart = faHeart : this.faHeart = faHeartR;
    
    this.typeProductEmit.emit(this.typeChoose);
  }

  dividerTypes() {
    let divType: Array<TypeProduct> = [];
    let length = this.product?.type.length == undefined ? 0 : this.product.type.length;

    for (let i = 0; i < length; i += 3) {
      this.product?.type[i] != null ? divType.push(this.product?.type[i]) : [];
      this.product?.type[i + 1] != null ? divType.push(this.product?.type[i + 1]) : [];
      this.product?.type[i + 2] != null ? divType.push(this.product?.type[i + 2]) : [];
      this.typesDivider?.push(divType);
      divType = [];
    }

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

  chooseType(type: TypeProduct){
    if(type != this.typeChoose){
      this.typeChoose = type;
      this.typeProductEmit.emit(this.typeChoose);
    }
  }

}
