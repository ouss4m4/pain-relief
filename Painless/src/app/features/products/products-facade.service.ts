import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductMinInfoForList } from './products.models';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store-typing/store.models';
import { ProductsFetchListAction } from './store/products.actions';
import { productsQuery } from './store/products.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {
  public productsList$: Observable<IProductMinInfoForList[]>;
  constructor(private store: Store<IAppState>) {
    this.productsList$ = this.store.select(productsQuery.queryProductsList);
  }

  public fetchProductsList() {
    this.store.dispatch(ProductsFetchListAction({ payload: '20' }));
  }
}
