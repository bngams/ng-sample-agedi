import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  // router => automatically created by constructor
  // private router;

  constructor(
    private route: ActivatedRouteSnapshot,
    private router: Router
  ) {
    const id = route.paramMap.get('id');
    // http ...
  }

  goTo() {
    this.router.navigateByUrl('');
  }
}
