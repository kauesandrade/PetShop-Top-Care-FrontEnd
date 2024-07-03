import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageProductComponent } from './dashboard-page-product.component';

describe('DashboardPageProductComponent', () => {
  let component: DashboardPageProductComponent;
  let fixture: ComponentFixture<DashboardPageProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPageProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPageProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
