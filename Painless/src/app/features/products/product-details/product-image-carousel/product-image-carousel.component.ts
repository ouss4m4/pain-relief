import { Component, OnInit } from '@angular/core';
import { IProductImage } from '../../products.models';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../store-typing/store.models';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-image-carousel.component.html',
  styleUrls: ['./product-image-carousel.component.scss']
})
export class ProductImagesCarouselComponent implements OnInit {
  public images$: Observable<IProductImage[]>;
  constructor(private store: Store<IAppState>) {
    this.images$ = this.store.select(
      state => state.ProductsPage.selectedProduct.images.edges
    );
  }
  ngOnInit() {}
}
