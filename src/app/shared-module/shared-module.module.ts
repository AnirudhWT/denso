import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {TreeModule} from 'primeng/tree';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {CarouselModule} from 'primeng/carousel';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DragDropModule} from 'primeng/dragdrop';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,
    InputNumberModule,
    DropdownModule,
    BreadcrumbModule,
    InputTextModule,
    FileUploadModule,
    FormsModule,
    OrganizationChartModule,
    TreeModule,
    AccordionModule,
    TableModule,
    CarouselModule,
    TabViewModule,
    DialogModule,
    AutoCompleteModule,
    DragDropModule
  ],
  exports:[
    ReactiveFormsModule,
    PasswordModule,
    InputNumberModule,
    DropdownModule,
    BreadcrumbModule,
    InputTextModule,
    FileUploadModule,
    FormsModule,
    OrganizationChartModule,
    TreeModule,
    AccordionModule,
    TableModule,
    CarouselModule,
    TabViewModule,
    DialogModule,
    AutoCompleteModule,
    DragDropModule
  ]
})
export class SharedModule { }
