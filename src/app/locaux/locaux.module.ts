import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocauxComponent } from './locaux.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ListLocauxComponent } from './list-locaux/list-locaux.component';
import { RecherchLocauxComponent } from './recherch-locaux/recherch-locaux.component';
import { DetailsLocauxComponent } from './details-locaux/details-locaux.component';
const routes: Routes = [
  {
    path: '',
    component: LocauxComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ListLocauxComponent,
      },
      {
        path: 'details/:id',
        component: DetailsLocauxComponent,
      },
      {
        path: 'recherche',
        component: RecherchLocauxComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    LocauxComponent,
    ListLocauxComponent,
    DetailsLocauxComponent,
    RecherchLocauxComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocauxModule {}
