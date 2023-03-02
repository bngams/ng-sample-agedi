import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent {

  addProduct(product: Product) {
    console.log('Recevied', product);
  }

}
