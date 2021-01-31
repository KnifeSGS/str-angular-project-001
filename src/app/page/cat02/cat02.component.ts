import { Component, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {
  title: string = this.categoryService.list[1].description;
  @Output() featuredFive = this.productService.getFeaturedFive();
  @Output() categoryOne = this.productService.getCategoryProducts(1);
  featured: string = this.productService.subtitles[0];
  phrase: string = '';

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event): void {
    this.phrase= (event.target as HTMLInputElement).value;
  }

}
