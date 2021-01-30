import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  @Output() categoryZero = this.productService.getCategoryProducts(0);
  
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
  }

}
