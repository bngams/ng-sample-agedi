import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  // @ViewChild('#productList')
  @ViewChild(ProductListComponent)
  private productListComponent!: ProductListComponent;

  constructor() {
    console.log('constructor', this.productListComponent);
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }

  ngOnInit(): void {
    console.log('oninit', this.productListComponent);
  }
  
  ngAfterViewInit(): void {
    console.log('afterviewinit', this.productListComponent);
  }

  addProduct(product: Product) {
    console.log('Recevied', product);
    this.productListComponent.products.push(product);
  }

}
