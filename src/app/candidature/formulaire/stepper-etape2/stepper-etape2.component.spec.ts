import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperEtape2Component } from './stepper-etape2.component';

describe('StepperEtape2Component', () => {
  let component: StepperEtape2Component;
  let fixture: ComponentFixture<StepperEtape2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperEtape2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperEtape2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
