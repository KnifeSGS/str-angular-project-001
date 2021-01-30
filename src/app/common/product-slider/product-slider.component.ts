import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  //input tulajdonságként kapja meg az 5 terméket a hometól
  @Input() productsOnSlider: filteredProducts[] = [];
  //output továbbadja őket a cardnak
  @Output() products: Array<Product> = filtered;

  constructor() { }

  ngOnInit(): void {
  }

}
