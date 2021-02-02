import { Component, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
  title: string = this.categoryService.list[0].description;
  @Output() featuredFive = this.productService.getFeaturedFive();

  @Output() categoryZero = this.productService.getCategoryProducts(0);
  featured: string = this.productService.subtitles[0];
  phrase: string = '';

  placeholder = 'Szűrés név alapján...';
  sortholder = 'Név szerint rendezve';

  searchkey = 'name';
  filterkey = 'name';

  changefilterKey(key: string): void {
    if (key === 'Név') {
      this.filterkey = 'name';
      this.sortholder = `${key} szerint rendezve`;
    }
    if (key === 'Ár') {
      this.filterkey = 'price';
      this.sortholder = `Alapár szerint rendezve`;
    }
    if (key === 'Akciósok előre') {
      this.filterkey = 'onsale';
      this.sortholder = `${key}`;
    }
    if (key === 'Kiemeltek előre') {
      this.filterkey = 'featured';
      this.sortholder = `${key}`;
    }
  }


  changeSearchKey(key: string): void {
    this.placeholder = `Szűrés ${key} alapján...`;
    if (key === 'leírás') {
      this.searchkey = 'description';
    }
    if (key === 'készlet') {
      this.searchkey = 'stock';
    }
    if (key === 'ár') {
      this.searchkey = 'price';
    }
    if (key === 'név') {
      this.searchkey = 'name';
    }
  }

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event): void {
    this.phrase= (event.target as HTMLInputElement).value;
  }

}
