import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedButtonComponent } from './fixed-button.component';

describe('FixedButtonComponent', () => {
  let component: FixedButtonComponent;
  let fixture: ComponentFixture<FixedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
