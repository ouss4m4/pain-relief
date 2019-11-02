import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../../core/apiservice/api.service';
import { IProductMinInfoForList } from './products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {
  private _productsList$: BehaviorSubject<IProductMinInfoForList[]>;
  constructor(private apiService: ApiService) {
    this._productsList$ = new BehaviorSubject<IProductMinInfoForList[]>([]);
  }
  public get productsList$(): Observable<IProductMinInfoForList[]> {
    return this._productsList$.asObservable();
  }

  public fetchProductsList() {
    this.apiService.get('/products').subscribe((res: any) => {
      this._productsList$.next(res);
    });
  }
}
