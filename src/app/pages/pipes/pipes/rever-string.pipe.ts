import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverString'
})
export class ReverStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const stringValue = (value as string).split('');
    const reverseString = stringValue.reverse();
    return reverseString.join('');
  }

}
