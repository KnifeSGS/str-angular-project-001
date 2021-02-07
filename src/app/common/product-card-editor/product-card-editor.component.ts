import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-card-editor',
  templateUrl: './product-card-editor.component.html',
  styleUrls: ['./product-card-editor.component.scss']
})
export class ProductCardEditorComponent implements OnInit {
  @Input() product: Product = new Product();


  constructor() { }

  ngOnInit(): void {
  }

}
