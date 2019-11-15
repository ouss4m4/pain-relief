import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductMinInfoForList } from './products.models';
import { Store } from '@ngrx/store';
import {
  ProductsFetchListAction,
  ProductsFetchListByCollection
} from './store/products.actions';
import { productsQuery } from './store/products.selectors';
import { RouterStateUrl } from '../../core/router/router.state';
import { queryRouterState } from '../../core/core.state';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {
  public productsList$: Observable<IProductMinInfoForList[]>;
  public routerState: Observable<RouterStateUrl>;
  constructor(private store: Store<any>) {
    this.productsList$ = this.store.select(productsQuery.queryProductsList);
    this.routerState = this.store.select(queryRouterState);
  }

  public fetchProductsList() {
    this.store.dispatch(ProductsFetchListAction({ payload: '20' }));
  }

  public fetchCollectionProducts(id: string) {
    this.store.dispatch(ProductsFetchListByCollection({ payload: id }));
  }
}
