import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credential',
  standalone: true
})
export class CustompipePipe implements PipeTransform {
  transform(value: string,): string {
    return '*'.repeat(value.length);
  }

}
