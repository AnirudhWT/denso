import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExploreProductDetailsComponent } from './explore-product-details/explore-product-details.component';
import { NewProductDocumentsComponent } from './new-product-documents/new-product-documents.component';
import { ProductLineComponent } from './product-line/product-line.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'productline',
        component: ProductLineComponent,
      },
      {
        path: 'addproductline',
        component: AddNewProductComponent,
      },
      {
        path: 'addproductlinedetails',
        component: NewProductDocumentsComponent,
      },
      {
        path: 'exploreproduct',
        component: ExploreProductDetailsComponent,
      }
      
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
