import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryfilter'
})
export class CategoryfilterPipe implements PipeTransform {

  transform(value: any[], category: number): any[] {
    if (!Array.isArray(value) || !category) {
      return value;
    } else {
      return value.filter(item => item['catId'] == category) }    
  }

}
