import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../../core/apiservice/api.service';
import { ISingleProductInfo } from './products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {
  private _productsList$: BehaviorSubject<ISingleProductInfo[]>;
  constructor(private apiService: ApiService) {
    this._productsList$ = new BehaviorSubject<ISingleProductInfo[]>([]);
  }
  public get productsList$(): Observable<ISingleProductInfo[]> {
    return this._productsList$.asObservable();
  }

  public fetchProductsList() {
    this.apiService.get('/products').subscribe((res: any) => {
      this._productsList$.next(res);
    });
  }
}
