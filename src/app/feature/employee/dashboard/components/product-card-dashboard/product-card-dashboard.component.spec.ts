import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardDashboardComponent } from './product-card-dashboard.component';

describe('ProductCardDashboardComponent', () => {
  let component: ProductCardDashboardComponent;
  let fixture: ComponentFixture<ProductCardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
