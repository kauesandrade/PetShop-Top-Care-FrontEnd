import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  faCamera,
  faStar,
  faStarHalf,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-review-product',
  templateUrl: './review-product.component.html',
  styleUrls: ['./review-product.component.scss'],
})
export class ReviewProductComponent implements OnInit {
  product?: ProductVariant;

  faCamera = faCamera;

  stars = [faStar, faStar, faStar, faStar, faStar];

  reviewForm = this.formBuilder.group({
    rating: [0, [Validators.required]],
    title: ['', [Validators.required, EmptyValidator]],
    review: ['', [Validators.required, EmptyValidator]],
    image: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    let title = this.route.snapshot.paramMap.get('id')!;
    this.product = this.searchService.searchProducts(title)[0];
  }

  get rating() {
    return this.reviewForm.get('rating');
  }
  get title() {
    return this.reviewForm.get('title');
  }
  get review() {
    return this.reviewForm.get('review');
  }
  get image() {
    return this.reviewForm.get('image');
  }

  updateStars(i: number) {
    this.stars = this.stars.map((star, index) => {
      if (index <= i - 1) {
        return faStar;
      }
      return faStarHalfAlt;
    });
    this.rating?.patchValue(i);
  }

  isFormValid() {
    return this.reviewForm.valid;
  }

  onSubmit() {}
}
