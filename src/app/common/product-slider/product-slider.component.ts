import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  @Input() featured: Product[] = [];

  randomFive(products: Product[]): Product[] {
    return products
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
