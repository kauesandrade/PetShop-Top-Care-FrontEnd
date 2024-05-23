import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishLayoutComponent } from './finish-layout.component';

describe('FinishLayoutComponent', () => {
  let component: FinishLayoutComponent;
  let fixture: ComponentFixture<FinishLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
