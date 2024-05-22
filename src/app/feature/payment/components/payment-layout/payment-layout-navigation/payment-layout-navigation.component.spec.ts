import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLayoutNavigationComponent } from './payment-layout-navigation.component';

describe('PaymentLayoutNavigationComponent', () => {
  let component: PaymentLayoutNavigationComponent;
  let fixture: ComponentFixture<PaymentLayoutNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentLayoutNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentLayoutNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
