import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchLocauxComponent } from './recherch-locaux.component';

describe('RecherchLocauxComponent', () => {
  let component: RecherchLocauxComponent;
  let fixture: ComponentFixture<RecherchLocauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchLocauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchLocauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
