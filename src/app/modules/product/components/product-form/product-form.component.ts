import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Output()
  newProduct = new EventEmitter<Product>();

  productForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(undefined, [Validators.required, Validators.min(1)]),
  });

  submit() {
    const product: Product = this.productForm.value;
    this.newProduct.emit(product);
  }
}
