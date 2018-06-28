import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
          canActivate:[ ProductGuardService ],
          component: ProductDetailComponent }
    ]),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class ProductRoutingModule { }
