import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-stepper-etape2',
  templateUrl: './stepper-etape2.component.html',
  styleUrls: ['./stepper-etape2.component.scss']
})
export class StepperEtape2Component implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  fruitCtrl2 = new FormControl();
  fruitCtrl3 = new FormControl();
  fruitCtrl4 = new FormControl();
  fruitCtrl5 = new FormControl();
  fruitCtrl6 = new FormControl();

  _filteredOptions: Observable<string[]>;
  _filteredOptions2: Observable<string[]>;

  fruits: string[] =  ['Agence de voyage'];
  fruits2: string[] = ['Agence de voyage'];
  fruits3: string[] = ['Agence de voyage'];
  fruits4: string[] = ['Agence de voyage'];
  fruits5: string[] = ['Agence de voyage'];
  fruits6: string[] = ['Agence de voyage'];

  options: string[] = ['Agence de voyage', 'Agence Immobiliaire', 'Restauration '];



  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('fruitInput2') fruitInput2: ElementRef<HTMLInputElement>;
  @ViewChild('fruitInput3') fruitInput3: ElementRef<HTMLInputElement>;
  @ViewChild('fruitInput4') fruitInput4: ElementRef<HTMLInputElement>;
  @ViewChild('fruitInput5') fruitInput5: ElementRef<HTMLInputElement>;
  @ViewChild('fruitInput6') fruitInput6: ElementRef<HTMLInputElement>;

  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this._filteredOptions = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.options.slice()));

    this._filteredOptions2 = this.fruitCtrl2.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.options.slice()));
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  add(event: MatChipInputEvent, ctrl : FormControl , frt : string[] ): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      frt.push(value);
    }

    // Clear the input value
    //event.chipInput!.clear();

    ctrl.setValue(null);
  }

  remove(fruit: string , frt: string[]): void {
    const index = frt.indexOf(fruit);

    if (index >= 0) {
      frt.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent, ctrl : FormControl, frt : string[], frtinput :ElementRef<HTMLInputElement> ): void {
    frt.push(event.option.viewValue);
    frtinput.nativeElement.value = '';
    ctrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
 
}
