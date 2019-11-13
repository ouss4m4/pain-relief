import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../../store-typing/store.models';
import { IProductsPageState } from '../products.models';


const queryProducts = createFeatureSelector<IAppState, IProductsPageState>(
  'ProductsPage'
);

const queryProductsList = createSelector(
  queryProducts,
  state => state.productsList
);

const queryProductDetails = createSelector(
  queryProducts,
  state => state.selectedProduct
);

export const productsQuery = {
  queryProductsList,
  queryProductDetails
};
