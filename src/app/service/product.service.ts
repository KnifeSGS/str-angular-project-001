import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  subtitles: string[] = ['Ajánlott termékek', 'Akciós termékek'];


  apiUrl: string = 'http://localhost:3000/list';

  constructor(
    private http: HttpClient,
  ) { }


  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }



  get(product: Product): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${product.id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }

  // getFeaturedFive(): Product[] {
  //   const topFiveFeaturedProducts: Product[] = this.list.filter(product => product.featured)
  //     .sort(() => 0.5 - Math.random())
  //     .slice(0, 5);
  //   return topFiveFeaturedProducts;
  // };

  // getOnsaleFive() {
  //   const onsaleProducts: Product[] = this.list.filter(product => product.onsale)
  //     .sort(() => 0.5 - Math.random())
  //     .slice(0, 5);

  //   return onsaleProducts;
  // }

  // getCategoryProducts(category: number) {
  //   const categoryProducts: Product[] = this.list.filter(product => category === product.catId);
  //   return categoryProducts;
  // }

}
