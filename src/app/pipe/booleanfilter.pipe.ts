import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanfilter'
})
export class BooleanfilterPipe implements PipeTransform {

    transform(value: any[], key: string = ''): any[] {
      if (!Array.isArray(value) || !key) {
        return value;
      }
      
      if (key === 'onsale' || key === 'featured')  {
        return value.filter(item => item[key] === true) }    
    }
  }