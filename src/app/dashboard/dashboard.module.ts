import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MapComponent } from './map/map.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CardInfoComponent } from './home/card-info/card-info.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, CardInfoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,

  ]
})
export class DashboardModule { }
