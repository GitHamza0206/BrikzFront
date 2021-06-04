import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperStep6Component } from './stepper-step6.component';

describe('StepperStep6Component', () => {
  let component: StepperStep6Component;
  let fixture: ComponentFixture<StepperStep6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperStep6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
