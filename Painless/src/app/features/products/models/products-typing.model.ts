import { IProductMinInfoForList, IProductDetails } from '../products.models';

export interface ICollection {
  node: {
    id: string;
    title: string;
  };
}

export interface IProductsPageState {
  collections: ICollection[];
  productsList: IProductMinInfoForList[];
  selectedProduct: IProductDetails;
}