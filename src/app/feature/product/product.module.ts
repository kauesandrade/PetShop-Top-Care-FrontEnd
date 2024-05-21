import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsCarouselComponent } from './components/product-details-carousel/product-details-carousel.component';
import { ProductPricingComponent } from './components/product-pricing/product-pricing.component';
import { FormsModule } from '@angular/forms';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductSpecificationsComponent } from './components/product-specifications/product-specifications.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { ProductReviewSectionComponent } from './components/product-review-section/product-review-section.component';

@NgModule({
  exports: [ProductComponent],
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductDetailsCarouselComponent,
    ProductPricingComponent,
    ProductDescriptionComponent,
    ProductSpecificationsComponent,
    ProductReviewComponent,
    ProductReviewSectionComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ],
})
export class ProductModule {}
