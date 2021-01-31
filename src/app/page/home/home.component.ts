import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() featuredFive = this.productService.getFeaturedFive();
  @Output() onsaleFive = this.productService.getOnsaleFive();
  

  featured: string = this.productService.subtitles[0];
  discount: string = this.productService.subtitles[1];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

}
