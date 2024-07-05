import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentItemCardComponent } from './payment-item-card.component';

describe('PaymentItemCardComponent', () => {
  let component: PaymentItemCardComponent;
  let fixture: ComponentFixture<PaymentItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
