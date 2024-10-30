import { Input, Directive } from '@angular/core';

@Directive()
export class BaseSlider {
  @Input() disabled: boolean = false;
}