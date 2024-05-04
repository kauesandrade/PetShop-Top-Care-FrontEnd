import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainSimpleComponent } from './header-main-simple.component';

describe('HeaderMainSimpleComponent', () => {
  let component: HeaderMainSimpleComponent;
  let fixture: ComponentFixture<HeaderMainSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMainSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMainSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
