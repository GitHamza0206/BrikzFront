import { DocumentationComponent } from './../locaux/details-locaux/documentation/documentation.component';
import { DetailsLocauxComponent } from './../locaux/details-locaux/details-locaux.component';
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
import { DragUploadComponent } from './_components/drag-upload/drag-upload.component';
import { DragUploadDirective } from './_components/drag-upload/drag-upload.directive';
import { EditInputComponent } from './_components/add-ged-files/edit-input/edit-input.component';
import { addGedFilesComponent } from './_components/add-ged-files/add-ged-files.component';
import { GenericTableComponent } from './_components/generic-table/generic-table.component';
import { ViewPdfDialogComponent } from './_components/view-pdf-dialog/view-pdf-dialog.component';
import { AngularOpenlayersModule } from "ngx-openlayers";
import { IdentificationComponent } from '../locaux/details-locaux/identification/identification.component';
import { CondidatComponent } from '../locaux/details-locaux/condidat/condidat.component';

@NgModule({
  declarations: [
    //? components
    NotFoundComponent,
    SideBarComponent,
    DashboardComponent,
    EditInputComponent,
    addGedFilesComponent,
    GenericTableComponent,
    ViewPdfDialogComponent,
    DetailsLocauxComponent,
    IdentificationComponent,
    DocumentationComponent,
    CondidatComponent,
    
    //? dialogs
    ConfirmationDialogComponent,
    DragUploadComponent,
    // directives
    DragUploadDirective,

  ],
  imports: [
    // base module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularOpenlayersModule,
    
    
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
    EditInputComponent,
    addGedFilesComponent,
    GenericTableComponent,
    DetailsLocauxComponent,
    IdentificationComponent,
    DocumentationComponent,
    CondidatComponent,
    // directives
    DragUploadDirective,
    // gallery
    GalleryModule,
    GallerizeModule,
    LightboxModule,
    // components
    NotFoundComponent,
    SideBarComponent,
    DashboardComponent,
    ViewPdfDialogComponent,
    AngularOpenlayersModule,
    // dialogs
    ConfirmationDialogComponent,
    DragUploadComponent,
  ],
})
export class SharedModule {}
