import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-step6',
  templateUrl: './stepper-step6.component.html',
  styleUrls: ['./stepper-step6.component.scss']
})
export class StepperStep6Component implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  
}
