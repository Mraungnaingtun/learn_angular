import { Component } from '@angular/core';
import { FirstComponent } from "../first/first.component";
import { SecondComponent } from "../second/second.component";

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [FirstComponent, SecondComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss'
})
export class ThirdComponent {

}
