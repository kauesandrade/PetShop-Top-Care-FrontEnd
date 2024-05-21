import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductCardComponent } from './order-product-card.component';

describe('OrderProductCardComponent', () => {
  let component: OrderProductCardComponent;
  let fixture: ComponentFixture<OrderProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
