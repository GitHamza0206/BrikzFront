import { GestionCandidatComponent } from './gestion-candidat/gestion-candidat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatureComponent } from './candidature.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  {
    path: '',
    component: CandidatureComponent,
    children: [
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      {
        path: 'formulaire',
        component: FormulaireComponent,
      },

      {
        path: 'gerer',
        component: GestionCandidatComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatureRoutingModule { }
