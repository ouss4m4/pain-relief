import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/apiservice/api.service';
import { Subject } from 'rxjs';
import { IProductDetails } from '../products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsFacade {
  private _productInfo$: Subject<IProductDetails>;
  constructor(private apiService: ApiService) {
    this._productInfo$ = new Subject<any>();
  }

  fetchProductDetails(id: string) {
    return this.apiService.get(`/product?id=${id}`).subscribe((res: IProductDetails) => this._productInfo$.next(res));
  }
  public get productInfo$() {
    return this._productInfo$.asObservable();
  }
}
