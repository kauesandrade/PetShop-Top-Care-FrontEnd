import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressCardComponent } from './add-address-card.component';

describe('AddAddressCardComponent', () => {
  let component: AddAddressCardComponent;
  let fixture: ComponentFixture<AddAddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddressCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAddressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
