import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewSectionComponent } from './product-review-section.component';

describe('ProductReviewSectionComponent', () => {
  let component: ProductReviewSectionComponent;
  let fixture: ComponentFixture<ProductReviewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReviewSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
