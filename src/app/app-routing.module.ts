import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {
    path: 'products/detail/:id',
    component: ProductdetailsComponent,
  },

  {
    path: '',
    component: ProductComponent,
  },

  {
    path: 'customers/',
    component: CustomerComponent,
  },

  {
    path: 'customers/detail/:id',
    component: CustomerdetailComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
