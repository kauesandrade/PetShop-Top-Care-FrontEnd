import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFormsComponent } from './service-forms.component';

describe('ServiceFormsComponent', () => {
  let component: ServiceFormsComponent;
  let fixture: ComponentFixture<ServiceFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
