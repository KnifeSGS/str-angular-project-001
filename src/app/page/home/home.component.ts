import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() product: ProductService['list'][] = [];
  console.log(product);

  constructor() { }

  ngOnInit(): void {
  }

}
