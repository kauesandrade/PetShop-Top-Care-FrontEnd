import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAddressModalComponent } from './choose-address-modal.component';

describe('ChooseAddressModalComponent', () => {
  let component: ChooseAddressModalComponent;
  let fixture: ComponentFixture<ChooseAddressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseAddressModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
