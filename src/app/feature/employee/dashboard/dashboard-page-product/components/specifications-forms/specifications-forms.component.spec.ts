import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationsFormsComponent } from './specifications-forms.component';

describe('SpecificationsFormsComponent', () => {
  let component: SpecificationsFormsComponent;
  let fixture: ComponentFixture<SpecificationsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificationsFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificationsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
