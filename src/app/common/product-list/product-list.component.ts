import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() phraseString: string = '';

  @Input() products: ProductService[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
