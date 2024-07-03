import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageServiceComponent } from './dashboard-page-service.component';

describe('DashboardPageServiceComponent', () => {
  let component: DashboardPageServiceComponent;
  let fixture: ComponentFixture<DashboardPageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPageServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
