import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // * if(typeof value === 'string') {
    // *  const words = value.split(' ');
    // *  const arrTemp = [];
    // *  for( let word of words ) {
    // *    arrTemp.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    // *  }
    // *  return arrTemp.join(' ');
    // * }

    if(typeof value === 'string') {
      return value
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1)
        .toLowerCase())
        .join(' ');
    }

    return value;
  }

}
