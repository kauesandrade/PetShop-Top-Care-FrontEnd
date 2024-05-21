import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductCardSectionComponent } from './cart-product-card-section.component';

describe('CartProductCardSectionComponent', () => {
  let component: CartProductCardSectionComponent;
  let fixture: ComponentFixture<CartProductCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProductCardSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartProductCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
