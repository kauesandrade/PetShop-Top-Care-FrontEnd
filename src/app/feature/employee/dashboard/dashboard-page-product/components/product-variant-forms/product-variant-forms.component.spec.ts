import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVariantFormsComponent } from './product-variant-forms.component';

describe('ProductVariantFormsComponent', () => {
  let component: ProductVariantFormsComponent;
  let fixture: ComponentFixture<ProductVariantFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVariantFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductVariantFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
