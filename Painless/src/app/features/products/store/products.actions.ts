import { createAction, props } from '@ngrx/store';
import { IProductMinInfoForList } from '../products.models';

export const ProductsFetchListAction = createAction(
  '[Products Page] Fetch Products List',
  props<{ payload: string }>()
);

export const ProductsListFetchedAction = createAction(
  '[Products Page] Products List Fetched',
  props<{ payload: IProductMinInfoForList[] }>()
);
