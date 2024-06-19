import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardDashboardComponent } from '../order-card-dashboard/order-card-dashboard.component';

describe('ServiceCardDashboardComponent', () => {
  let component: ServiceCardDashboardComponent;
  let fixture: ComponentFixture<ServiceCardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCardDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
