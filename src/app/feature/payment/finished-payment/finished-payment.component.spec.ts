import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedPaymentComponent } from './finished-payment.component';

describe('FinishedPaymentComponent', () => {
  let component: FinishedPaymentComponent;
  let fixture: ComponentFixture<FinishedPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
