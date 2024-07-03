import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopCardComponent } from './petshop-card.component';

describe('PetshopCardComponent', () => {
  let component: PetshopCardComponent;
  let fixture: ComponentFixture<PetshopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetshopCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetshopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
