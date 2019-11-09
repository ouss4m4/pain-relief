import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/products.effects';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature('ProductsPage', productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [],
  declarations: [ProductsComponent, ProductDetailsComponent]
})
export class ProductsModule {}
