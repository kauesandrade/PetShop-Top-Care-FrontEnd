import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundCardCarouselComponent } from './round-card-carousel.component';

describe('RoundCardCarouselComponent', () => {
  let component: RoundCardCarouselComponent;
  let fixture: ComponentFixture<RoundCardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundCardCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
