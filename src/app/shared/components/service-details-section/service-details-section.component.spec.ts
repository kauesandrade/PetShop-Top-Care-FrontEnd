import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsSectionComponent } from './service-details-section.component';

describe('ServiceDetailsSectionComponent', () => {
  let component: ServiceDetailsSectionComponent;
  let fixture: ComponentFixture<ServiceDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
