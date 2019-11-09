import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from '../../../core/services/products.service';
import {
  ProductsFetchListAction,
  ProductsListFetchedAction
} from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  loadProductsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsFetchListAction),
      mergeMap(({ payload }) =>
        this.productsService.fetchProductsList(payload).pipe(
          map(products => ProductsListFetchedAction({ payload: products })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
