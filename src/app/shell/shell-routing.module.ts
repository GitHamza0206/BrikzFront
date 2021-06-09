import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/_components/dashboard/dashboard.component';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
        import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'locaux',
        loadChildren: () =>
          import('../locaux/locaux.module').then((m) => m.LocauxModule),
      },

      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
      },

      {
        path: 'candidature',
        loadChildren: () =>
          import('../candidature/candidature.module').then((m) => m.CandidatureModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
