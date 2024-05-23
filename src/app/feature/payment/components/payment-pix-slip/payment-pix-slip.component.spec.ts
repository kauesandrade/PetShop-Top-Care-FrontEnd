import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPixSlipComponent } from './payment-pix-slip.component';

describe('PaymentPixSlipComponent', () => {
  let component: PaymentPixSlipComponent;
  let fixture: ComponentFixture<PaymentPixSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPixSlipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentPixSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
