import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core-module.module';
import { SharedModule } from '../shared-module/shared-module.module';
import { ProductLineComponent } from './product-line/product-line.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { NewProductDocumentsComponent } from './new-product-documents/new-product-documents.component';
import { ExploreProductDetailsComponent } from './explore-product-details/explore-product-details.component';
import { DataTableComponent } from './new-product-documents/data-table/data-table.component';
import { ProcessFlowComponent } from './new-product-documents/process-flow/process-flow.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { ImagesViewComponent } from './explore-product-details/images-view/images-view.component';
import { UploadProcessStepComponent } from './explore-product-details/upload-process-step/upload-process-step.component';
@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductLineComponent,
    AddNewProductComponent,
    NewProductDocumentsComponent,
    ExploreProductDetailsComponent,
    DataTableComponent,
    ProcessFlowComponent,
    ImagesViewComponent,
    UploadProcessStepComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    SharedModule,
    NgCircleProgressModule,
    PdfViewerModule,
    NgxGraphModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class UserModule { }
