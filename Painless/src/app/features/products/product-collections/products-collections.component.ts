import { Component, OnInit } from '@angular/core';
import { CollectionsFacade } from './products-collections-facade.service';
import { Observable } from 'rxjs';
import { ICollection } from '../products.models';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-products-collections',
  templateUrl: './products-collections.component.html',
  styleUrls: ['./products-collections.component.scss']
})
export class ProductsCollectionsComponent implements OnInit {
  public collections$: Observable<ICollection[]>;
  public itemsListReady$: Observable<boolean>;
  constructor(private collectionsFacade: CollectionsFacade) {
    this.itemsListReady$ = this.collectionsFacade.itemsListReady$
    this.collections$ = this.collectionsFacade.collections$.pipe(
      tap(cols => console.log('collections a zouba', cols))
    );
  }

  ngOnInit() {
    this.collectionsFacade.getCollections('10');
  }
}
