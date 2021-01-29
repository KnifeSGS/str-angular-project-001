import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  //input tulajdonságként kapja meg az 5 terméket
  @Input() productsOnSlider: filteredProducts[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
