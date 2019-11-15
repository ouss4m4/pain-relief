import { Injectable } from '@angular/core';
import { ApiService } from '../apiservice/api.service';
import { Observable } from 'rxjs';
import {
  IProductMinInfoForList,
  IProductDetails,
  ICollection
} from '../../features/products/products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  fetchProductsList(qts: string): Observable<IProductMinInfoForList[]> {
    return this.apiService.get(`/products?qts=${qts}`);
  }

  fetchCollectionProducts(id: string): Observable<IProductMinInfoForList[]> {
    return this.apiService.get(`/collection?id=${id}`);
  }
  fetchProductDetails(id: string): Observable<IProductDetails> {
    return this.apiService.get(`/product?id=${id}`);
  }

  fetchCollections(qts: string): Observable<ICollection[]> {
    return this.apiService.get(`/products/collections?qts=${qts}`);
  }
}
