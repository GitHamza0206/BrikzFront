import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './_components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { GalleryModule } from '@ngx-gallery/core';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { SideBarComponent } from './_components/side-bar/side-bar.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { ConfirmationDialogComponent } from './_dialogs/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    //? components
    NotFoundComponent,
    SideBarComponent,
    DashboardComponent,
    //? dialogs
    ConfirmationDialogComponent,
  ],
  imports: [
    // base module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // angular - Material
    MaterialModule,
    // Libs
    FlexLayoutModule,
    // gallery
    GalleryModule,
    GallerizeModule,
    LightboxModule,
  ],

  exports: [
    // base module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,

    // gallery
    GalleryModule,
    GallerizeModule,
    LightboxModule,
    // components
    NotFoundComponent,
    SideBarComponent,
    DashboardComponent,
    // dialogs
    ConfirmationDialogComponent,
  ],
})
export class SharedModule {}
