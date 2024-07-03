import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageSchedulingComponent } from './dashboard-page-scheduling.component';

describe('DashboardPageSchedulingComponent', () => {
  let component: DashboardPageSchedulingComponent;
  let fixture: ComponentFixture<DashboardPageSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPageSchedulingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPageSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
