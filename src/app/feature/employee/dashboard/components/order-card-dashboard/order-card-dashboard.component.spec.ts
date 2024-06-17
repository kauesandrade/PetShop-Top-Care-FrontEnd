import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardDashboardComponent } from './order-card-dashboard.component';

describe('OrderCardDashboardComponent', () => {
  let component: OrderCardDashboardComponent;
  let fixture: ComponentFixture<OrderCardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCardDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
