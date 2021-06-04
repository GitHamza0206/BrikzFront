import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperEtape5Component } from './stepper-etape5.component';

describe('StepperEtape5Component', () => {
  let component: StepperEtape5Component;
  let fixture: ComponentFixture<StepperEtape5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperEtape5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperEtape5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
