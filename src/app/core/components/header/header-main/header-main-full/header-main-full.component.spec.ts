import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainFullComponent } from './header-main-full.component';

describe('HeaderMainFullComponent', () => {
  let component: HeaderMainFullComponent;
  let fixture: ComponentFixture<HeaderMainFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMainFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMainFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
