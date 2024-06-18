import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingCardDashboardComponent } from './scheduling-card-dashboard.component';

describe('SchedulingCardDashboardComponent', () => {
  let component: SchedulingCardDashboardComponent;
  let fixture: ComponentFixture<SchedulingCardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingCardDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
