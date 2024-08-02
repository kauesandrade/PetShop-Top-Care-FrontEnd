import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentItemSectionComponent } from './payment-item-section.component';

describe('PaymentItemSectionComponent', () => {
  let component: PaymentItemSectionComponent;
  let fixture: ComponentFixture<PaymentItemSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentItemSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentItemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
