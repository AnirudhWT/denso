import {  CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListViewerComponent } from './list-viewer/list-viewer.component';
import { SharedModule } from '../shared-module/shared-module.module';
import { SlidingSideNavComponent } from './sliding-side-nav/sliding-side-nav.component';
import { DocumentWindowComponent } from './document-window/document-window.component';
import { DocumentLibraryComponent } from './document-library/document-library.component';
import { AddNewMachineDocComponent } from './add-new-machine-doc/add-new-machine-doc.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ListViewerComponent,
    SlidingSideNavComponent,
    DocumentWindowComponent,
    DocumentLibraryComponent,
    AddNewMachineDocComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HeaderComponent,
    ListViewerComponent,
    SlidingSideNavComponent,
    DocumentWindowComponent,
    DocumentLibraryComponent,
    AddNewMachineDocComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class CoreModule { }
