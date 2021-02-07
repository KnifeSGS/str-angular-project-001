import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-card-editor',
  templateUrl: './product-card-editor.component.html',
  styleUrls: ['./product-card-editor.component.scss']
})
export class ProductCardEditorComponent implements OnInit {

  @Input() product: Product = new Product();

  removeProduct(product: Product): void {
    this.productService.remove(product).subscribe(
      () => console.log("deleted")
    );
  }

  updateProduct(product: Product): void {
    this.productService.update(product).subscribe(
    () => console.log(product)
    );
  }

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
