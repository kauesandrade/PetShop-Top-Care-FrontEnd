import { Component, Input, OnInit } from '@angular/core';
import { faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { ReviewProduct } from 'src/app/shared/interfaces/review-product';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {

  faStarSolid = faStarSolid;
  faStarRegular = faStarRegular;

  @Input() review?: ReviewProduct;
  starsValue: Array<boolean> = new Array<boolean>(5);


  constructor() { }

  ngOnInit(): void {
    this.setStarsValue();
  }

  setStarsValue(){
    if(this.review){
      for(let i = 0; i < 5; i++){
        i < this.review.rating ? this.starsValue[i] = true : this.starsValue[i] = false;
      }
    }
  }

}
