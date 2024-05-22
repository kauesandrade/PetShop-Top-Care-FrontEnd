import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemSectionComponent } from './product-item-section.component';

describe('ProductItemSectionComponent', () => {
  let component: ProductItemSectionComponent;
  let fixture: ComponentFixture<ProductItemSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
