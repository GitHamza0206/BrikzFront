import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatureRoutingModule } from './candidature-routing.module';
import { CandidatureComponent } from './candidature.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { StepperComponent } from './formulaire/stepper/stepper.component';
import { StepperEtape2Component } from './formulaire/stepper-etape2/stepper-etape2.component';
import { StepperEtape5Component } from './formulaire/stepper-etape5/stepper-etape5.component';
import { StepperStep6Component } from './formulaire/stepper-step6/stepper-step6.component';
import { StepperEtape2bComponent } from './formulaire/stepper-etape2b/stepper-etape2b.component';
import { GestionCandidatComponent } from './gestion-candidat/gestion-candidat.component';


@NgModule({
  declarations: [CandidatureComponent, FormulaireComponent, StepperComponent, StepperEtape2Component, StepperEtape5Component, StepperStep6Component, StepperEtape2bComponent, GestionCandidatComponent],
  imports: [
    CommonModule,
    CandidatureRoutingModule,
    SharedModule,
  ]
})
export class CandidatureModule { }
