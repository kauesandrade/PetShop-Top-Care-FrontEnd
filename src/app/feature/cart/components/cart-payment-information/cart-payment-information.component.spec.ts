import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPaymentInformationComponent } from './cart-payment-information.component';

describe('CartPaymentInformationComponent', () => {
  let component: CartPaymentInformationComponent;
  let fixture: ComponentFixture<CartPaymentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPaymentInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPaymentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
