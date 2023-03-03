import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, Products } from '../models/product';

export type ProductAPIResponse = {
  products: Product[],
  total: number, 
  limit: number,
  skip: number
}

/**
 * JS DOC
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns 
   */
  getProducts(): Observable<Products> {
    return this.http.get<ProductAPIResponse>('https://dummyjson.com/products').pipe(
      map(data => data.products)
    )
  }
  
}
