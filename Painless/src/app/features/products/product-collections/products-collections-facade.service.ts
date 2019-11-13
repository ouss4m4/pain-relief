import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICollection } from '../products.models';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store-typing/store.models';
import { ProductsFetchCollectionsAction } from '../store/products.actions';

@Injectable({
  providedIn: 'root'
})
export class CollectionsFacade {
  public collections$: Observable<ICollection[]>;
  constructor(private store: Store<IAppState>) {
    this.collections$ = this.store.select(
      state => state.ProductsPage.collections
    );
  }

  getCollections(qts: string) {
    this.store.dispatch(ProductsFetchCollectionsAction({ payload: qts }));
  }
}
