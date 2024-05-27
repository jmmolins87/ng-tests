import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArray'
})
export class NumToArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value === 'number') {
      return [...Array(value).keys()];
    }
    
    return null; // Add a return statement here to handle the case when value is not a number
  }

}
