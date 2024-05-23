import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPaymentMethodsComponent } from './cart-payment-methods.component';

describe('CartPaymentMethodsComponent', () => {
  let component: CartPaymentMethodsComponent;
  let fixture: ComponentFixture<CartPaymentMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPaymentMethodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
