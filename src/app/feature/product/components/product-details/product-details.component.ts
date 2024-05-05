import { Component, OnInit } from '@angular/core';
import { faStar, faComment, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartR } from '@fortawesome/free-regular-svg-icons';
import { TypeProduct } from 'src/app/shared/interfaces/type-product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() {
    this.like == true ? this.faHeart = faHeart : this.faHeart = faHeartR;
    this.dividerTypes();
  }

  ngOnInit(): void {
  }

  faStar = faStar;
  faComment = faComment;
  faHeart = faHeartR;
  faShare = faShareAlt;

  like: boolean = false
  stock: boolean = true;

  typeOfProducts?: string = "Tamanho";
  types: Array<TypeProduct> = [
    {
      productCode: 1,
      type: "10Kg"
    },
    {
      productCode: 2,
      type: "20Kg"
    },
    {
      productCode: 3,
      type: "30Kg"
    },
    {
      productCode: 4,
      type: "40Kg"
    },
  ]
  typesDivider: Array<Array<TypeProduct>> = [];


  dividerTypes() {
    let divType: Array<TypeProduct> = [];

    for (let i = 0; i < this.types.length; i += 3) {
      this.types[i] != null ? divType.push(this.types[i]) : [];
      this.types[i+1] != null ? divType.push(this.types[i+1]) : [];
      this.types[i+2] != null ? divType.push(this.types[i+2]) : [];
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

  
}
