import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperEtape2bComponent } from './stepper-etape2b.component';

describe('StepperEtape2bComponent', () => {
  let component: StepperEtape2bComponent;
  let fixture: ComponentFixture<StepperEtape2bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperEtape2bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperEtape2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
