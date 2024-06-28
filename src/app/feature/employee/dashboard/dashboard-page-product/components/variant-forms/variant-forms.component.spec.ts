import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantFormsComponent } from './variant-forms.component';

describe('VariantFormsComponent', () => {
  let component: VariantFormsComponent;
  let fixture: ComponentFixture<VariantFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
