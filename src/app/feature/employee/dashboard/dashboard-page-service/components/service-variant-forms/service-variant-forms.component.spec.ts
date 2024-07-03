import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceVariantFormsComponent } from './service-variant-forms.component';

describe('ServiceVariantFormsComponent', () => {
  let component: ServiceVariantFormsComponent;
  let fixture: ComponentFixture<ServiceVariantFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceVariantFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceVariantFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
