import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCarouselComponent } from './product-details-carousel.component';

describe('ProductDetailsCarouselComponent', () => {
  let component: ProductDetailsCarouselComponent;
  let fixture: ComponentFixture<ProductDetailsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
