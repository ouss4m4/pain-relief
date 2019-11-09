import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../../store-typing/store.models';
import { IProductsPageState } from '../models/products-typing.model';


const queryProducts = createFeatureSelector<IAppState, IProductsPageState>('ProductsPage')

const queryProductsList =  createSelector(
    queryProducts,
    state => state.productsList
) 
 

export const productsQuery = {
    queryProductsList
}
