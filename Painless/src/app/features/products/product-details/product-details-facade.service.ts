import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductDetails } from '../products.models';
import { IAppState } from '../../../store-typing/store.models';
import { Store } from '@ngrx/store';
import { ProductsFetchDetailsAction } from '../store/products.actions';
import { productsQuery } from '../store/products.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsFacade {
  public productInfo$: Observable<IProductDetails>;
  constructor(private store: Store<IAppState>) {
    this.productInfo$ = this.store.select(productsQuery.queryProductDetails);
  }

  fetchProductDetails(id: string) {
    this.store.dispatch(ProductsFetchDetailsAction({ payload: id }));
  }
}
