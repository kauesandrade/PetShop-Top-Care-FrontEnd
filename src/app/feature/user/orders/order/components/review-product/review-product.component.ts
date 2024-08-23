import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { EmptyValidator } from 'src/app/core/validators/empty.validator';
import { ProductVariant } from 'src/app/shared/interfaces/product/product-variant';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ReviewService } from 'src/app/shared/services/review/review.service';
import { ProductReview } from 'src/app/shared/interfaces/product/product-review';
import { UserService } from 'src/app/shared/services/user/user.service';
import { HttpClient } from '@angular/common/http';

library.add(fasStar);
library.add(farStar);

@Component({
  selector: 'app-review-product',
  templateUrl: './review-product.component.html',
  styleUrls: ['./review-product.component.scss'],
})
export class ReviewProductComponent implements OnInit {
  product?: ProductVariant;

  faCamera = faCamera;

  stars = [fasStar, fasStar, fasStar, fasStar, fasStar];

  @ViewChild('imageDisplay') imageDisplay!: ElementRef<HTMLDivElement>;

  reviewForm = this.formBuilder.group({
    rating: [5, [Validators.required]],
    review: ['', [Validators.required, EmptyValidator]],
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
    private formBuilder: FormBuilder,
    private reviewService: ReviewService,
    private userService: UserService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    let title = this.route.snapshot.paramMap.get('id')!;
    this.product = this.searchService.searchProducts(title)[0];
  }

  // tira o undefined do loggedUserId no merge
  postProductReview(loggedUserId: number | undefined, review: string, rating: number) {
    return this.httpClient.post('http://localhost:8088/topcare/productReview', 
    { customerId: loggedUserId, review: review, rating: rating });
  }

  get rating() {
    return this.reviewForm.get('rating');
  }
  get review() {
    return this.reviewForm.get('review');
  }

  updateStars(i: number) {
    this.stars = this.stars.map((star, index) => {
      if (index <= i - 1) {
        return fasStar;
      }
      return farStar;
    });
    this.rating?.patchValue(i);
  }

  onFileChange(event: any) {
    const files = event.target?.files;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      console.log(reader.result!.toString());

      this.imageDisplay.nativeElement.style.backgroundImage = `url(${reader.result!.toString()})`;
    };
  }

  isFormValid() {
    return this.reviewForm.valid;
  }

  onSubmit() {
    let review: ProductReview = {
      user: this.userService.loggedUser!.fullname,
      icon: this.userService.loggedUser!.profileImage,
      rating: this.rating?.value!,
      review: this.review?.value!,
      datePost: new Date().toDateString(),
    };

    this.postProductReview(this.userService.loggedUser?.id, review.review, review.rating).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    this.reviewService.addReview(review, this.product!);
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
