import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  @Input() featured: Product[] = [];

  firstFive: Product[] = this.featured.map((item, index) => item[index] < 6 ? item[index] : '');
  secondFive: Product[] = this.featured.slice(6, 10);

  constructor() {

  }

  ngOnInit(): void {
  }

}
