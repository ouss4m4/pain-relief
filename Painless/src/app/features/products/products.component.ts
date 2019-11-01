import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from './products-facade.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ISingleProductInfo } from './products.models';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList$: Observable<ISingleProductInfo[]>;
  constructor(private productsFacade: ProductsFacade) {
    this.productList$ = this.productsFacade.productsList$.pipe(
      tap(val => console.log('val res', val))
    );
  }

  ngOnInit() {
    this.productsFacade.fetchProductsList();
  }
}
