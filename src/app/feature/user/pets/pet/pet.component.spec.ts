import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfile } from './pet.component';

describe('PetComponent', () => {
  let component: PetProfile;
  let fixture: ComponentFixture<PetProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetProfile ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
