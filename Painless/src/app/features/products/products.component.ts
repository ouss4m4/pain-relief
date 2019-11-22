import { Component,  OnDestroy } from '@angular/core';
import { ProductsFacade } from './products-facade.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IProductMinInfoForList } from './products.models';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnDestroy {
  public productList$: Observable<IProductMinInfoForList[]>;

  public destroy$: Subject<any> = new Subject();
  constructor(private productsFacade: ProductsFacade) {
    this.productList$ = this.productsFacade.productsList$;
    this.productsFacade.routerState
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        if (res.params && res.params.id) {
          this.productsFacade.fetchCollectionProducts(res.params.id);
        } else {
          this.productsFacade.fetchProductsList();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
