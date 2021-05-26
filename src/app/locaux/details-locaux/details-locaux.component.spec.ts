import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLocauxComponent } from './details-locaux.component';

describe('DetailsLocauxComponent', () => {
  let component: DetailsLocauxComponent;
  let fixture: ComponentFixture<DetailsLocauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLocauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLocauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
