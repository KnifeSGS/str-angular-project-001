import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'random5'
})
export class Random5Pipe implements PipeTransform {

  transform(array: Product[]): Product[] {
    return array
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
    };

}
