import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICollection } from '../products.models';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store-typing/store.models';
import { ProductsFetchCollectionsAction } from '../store/products.actions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionsFacade {
  public collections$: Observable<ICollection[]>;
  public itemsListReady$: Observable<boolean>;
  constructor(private store: Store<IAppState>) {
    this.collections$ = this.store.select(
      state => state.ProductsPage.collections
    );
    this.itemsListReady$ = this.store
      .select(state => state.ProductsPage.productsList)
      .pipe(map(items => items.length > 0));
  }

  getCollections(qts: string) {
    this.store.dispatch(ProductsFetchCollectionsAction({ payload: qts }));
  }
}
