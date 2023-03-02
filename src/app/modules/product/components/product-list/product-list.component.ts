import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  // detectionStrategy: ChangeDetectionStrategy.OnPush;
})
export class ProductListComponent {
  // @Input()
  // productsInput!: Product[];

  products: Product[] = [
    { title: "P1", price: 12},
    { title: "P2", price: 10},
  ]; 

  anyPublicMethod(): void {

  }
}
