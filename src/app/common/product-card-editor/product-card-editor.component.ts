import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-card-editor',
  templateUrl: './product-card-editor.component.html',
  styleUrls: ['./product-card-editor.component.scss']
})
export class ProductCardEditorComponent implements OnInit {

  @Input() product: Product = new Product();
  @Output() deleteClick: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  onDeleteButtonClick(): void {
    this.deleteClick.emit(true);
  }

  updateProduct(product: Product): void {
    this.productService.update(product).subscribe(
      () => console.log(product)
    );
  }

}
