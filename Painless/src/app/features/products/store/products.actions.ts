import { createAction, props } from '@ngrx/store';
import { IProductMinInfoForList, IProductDetails } from '../products.models';

export const ProductsFetchListAction = createAction(
  '[Products Page] Fetch Products List',
  props<{ payload: string }>()
);

export const ProductsListFetchedAction = createAction(
  '[Products Page] Products List Fetched',
  props<{ payload: IProductMinInfoForList[] }>()
);

export const ProductsFetchDetailsAction = createAction(
  '[Products Page] Fetch a Product Details',
  props<{ payload: string }>()
);

export const ProductsDetailsFetchedAction = createAction(
  '[Products Page] Product Details Fetched',
  props<{ payload: IProductDetails }>()
);
