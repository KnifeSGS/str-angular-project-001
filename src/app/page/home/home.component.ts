import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();

  featured: string = this.productService.subtitles[0];
  discount: string = this.productService.subtitles[1];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }
}
