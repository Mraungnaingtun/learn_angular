import { Component, Input } from '@angular/core';
import { BaseSlider } from '../reuse/BaseSlider';

@Component({
  selector: 'app-custom-slider',
  standalone: true,
  imports: [],
  templateUrl: './custom-slider.component.html',
  styleUrl: './custom-slider.component.scss',
  inputs: ['disabled'],
})
export class CustomSliderComponent  extends BaseSlider{
  
  @Input() override disabled: boolean = false;

  @Input({ transform: trimString }) label = '';

  @Input({ transform: appendPx }) widthPx: string = '';

  @Input({alias: 'sliderValue'}) value = 0;
}

function trimString(value: string | undefined): string {
  return value?.trim() ?? '';
}


function appendPx(value: number): string {
  return `${value}px`;
}

//------ getter // setter //
// export class CustomSlider {
//   @Input()
//   get value(): number {
//     return this.internalValue;
//   }
//   set value(newValue: number) {
//     this.internalValue = newValue;
//   }
//   private internalValue = 0;
// }