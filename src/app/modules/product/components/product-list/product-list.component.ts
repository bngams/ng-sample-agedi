import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Product, Products } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  // detectionStrategy: ChangeDetectionStrategy.OnPush;
})
export class ProductListComponent implements OnInit {
  products: Products = [];
  products$!: Observable<Products>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts$();
    // this.loadProducts();
  }

  loadProducts$(): void {
    this.products$ = this.productService.getProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe( data => {
      this.products = data;
    }).unsubscribe();
  }

  anyPublicMethod(): void {
  }

  demoObservable(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 5000);
    });

    const observer = {
      next: (result: any) => console.log(result),
      error: (error: any) => console.log(error),
      complete: () => console.log('done')
    }
    observable.subscribe(observer);
    // observable.subscribe((result) => console.log(result));

    of(1,2,3)
    .pipe(
      map(x => x * 10)
    )
    .subscribe(
      result => console.log(result)
    )



  }
}
