import { createReducer, on, Action } from '@ngrx/store';

import {
  ProductsListFetchedAction,
  ProductsDetailsFetchedAction,
  ProductsCollectionsFetchedAction
} from './products.actions';
import { IProductsPageState } from '../products.models';

export const initialState: IProductsPageState = {
  collections: [],
  productsList: [],
  selectedProduct: {
    description: '',
    featuredImage: {
      id: '',
      originalSrc: ''
    },
    handle: '',
    images: {
      edges: []
    },
    options: [],
    priceRange: {
      minVariantPrice: { amount: '', currencyCode: '' },
      maxVariantPrice: { amount: '', currencyCode: '' }
    },
    productType: '',
    title: '',
    totalVariants: '',
    variants: {
      edges: []
    }
  }
};

const reducer = createReducer(
  initialState,
  on(ProductsListFetchedAction, (state, { payload }) => ({
    ...state,
    productsList: payload
  })),
  on(ProductsDetailsFetchedAction, (state, { payload }) => ({
    ...state,
    selectedProduct: payload
  })),
  on(ProductsCollectionsFetchedAction, (state, { payload }) => ({
    ...state,
    collections: payload
  }))
);

export function productsReducer(
  state: IProductsPageState | undefined,
  action: Action
): IProductsPageState {
  return reducer(state, action);
}
