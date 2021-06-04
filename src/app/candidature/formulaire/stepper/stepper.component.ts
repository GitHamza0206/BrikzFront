import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup : FormGroup;
  secondBisFormGroup: FormGroup;


  options: string[] = ['Agence de voyage ', 'Agence Immobiliaire', 'Restauration '];
  filteredOptions: Observable<string[]>;
  commerceProximite : Observable<string[]>;

  constructor(private _formBuilder: FormBuilder) {}

  

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });

    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });

    this.secondBisFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });

    this.filteredOptions = this.firstFormGroup.controls.firstCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.commerceProximite = this.fourthFormGroup.controls.fourthCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
