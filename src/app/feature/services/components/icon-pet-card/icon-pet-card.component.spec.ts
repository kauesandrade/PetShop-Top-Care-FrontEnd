import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPetCardComponent } from './icon-pet-card.component';

describe('IconPetCardComponent', () => {
  let component: IconPetCardComponent;
  let fixture: ComponentFixture<IconPetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPetCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
