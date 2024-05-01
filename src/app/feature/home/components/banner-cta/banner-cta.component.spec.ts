import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCtaComponent } from './banner-cta.component';

describe('BannerCtaComponent', () => {
  let component: BannerCtaComponent;
  let fixture: ComponentFixture<BannerCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
