import { createReducer, on, Action } from '@ngrx/store';
import { IProductsPageState } from '../models/products-typing.model';
import { ProductsListFetchedAction } from './products.actions';

export const initialState: IProductsPageState = {
  collections: [],
  productsList: []
};

const reducer = createReducer(
  initialState,
  on(ProductsListFetchedAction, (state, { payload }) => ({
    ...state,
    productsList: payload
  }))
);

export function productsReducer(
  state: IProductsPageState | undefined,
  action: Action
): IProductsPageState {
  return reducer(state, action);
}
