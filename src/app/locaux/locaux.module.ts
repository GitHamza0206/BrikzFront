import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocauxComponent } from './locaux.component';
import { ShellModule } from '../shell/shell.module';



@NgModule({
  declarations: [LocauxComponent],
  imports: [
    CommonModule,
    ShellModule,
  ]
})
export class LocauxModule { }
