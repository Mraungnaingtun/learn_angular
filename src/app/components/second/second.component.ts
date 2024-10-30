import { Component, ViewEncapsulation } from '@angular/core';
import { FirstComponent } from '../first/first.component';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [SecondComponent,FirstComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
   encapsulation: ViewEncapsulation.ShadowDom
})
export class SecondComponent {

}
