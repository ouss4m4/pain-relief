import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsFacade } from './products-facade.service';
import { Observable, Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { IProductMinInfoForList } from './products.models';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from '../../core/router/router.state';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnDestroy {
  public productList$: Observable<IProductMinInfoForList[]>;

  public destroy$: Subject<any> = new Subject();
  constructor(private productsFacade: ProductsFacade) {
    this.productList$ = this.productsFacade.productsList$.pipe(
      tap(val => console.log('val res', val))
    );
    this.productsFacade.routerState
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        if (res.params && res.params.id) {
          console.log('wtf go fetch')
          this.productsFacade.fetchCollectionProducts(res.params.id)
        } else {
          this.productsFacade.fetchProductsList();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
