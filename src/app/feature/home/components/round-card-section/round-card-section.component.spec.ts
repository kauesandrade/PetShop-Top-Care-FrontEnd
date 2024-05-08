import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundCardSectionComponent } from './round-card-section.component';

describe('RoundCardSectionComponent', () => {
  let component: RoundCardSectionComponent;
  let fixture: ComponentFixture<RoundCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundCardSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
