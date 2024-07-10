import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetScheduleComponent } from './pet-schedule.component';

describe('PetScheduleComponent', () => {
  let component: PetScheduleComponent;
  let fixture: ComponentFixture<PetScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
