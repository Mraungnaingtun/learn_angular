import { Component } from '@angular/core';
import { InputChildComponent } from '../input-child/input-child.component';
import { CustomSliderComponent } from "../custom-slider/custom-slider.component";

@Component({
  selector: 'app-input-example',
  standalone: true,
  imports: [InputChildComponent, CustomSliderComponent],
  templateUrl: './input-example.component.html',
  styleUrl: './input-example.component.scss'
})
export class InputExampleComponent {

  personInfo = { name: 'John Doe', age: 35 };
  gender = "Male"
}
