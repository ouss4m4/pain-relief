import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsFacade } from './product-details-facade.service';
import { Observable } from 'rxjs';
import { IProductDetails } from '../products.models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {
  public gid: string;
  public productInfo$: Observable<IProductDetails>;
  constructor(private route: ActivatedRoute, private detailsFacade: ProductDetailsFacade) {
    this.gid = this.route.snapshot.paramMap.get('id') || '';
    this.productInfo$ = this.detailsFacade.productInfo$;
  }

  ngOnInit() {
    this.detailsFacade.fetchProductDetails(this.gid);
  }
}
