import { Component } from '@angular/core';

@Component({
  selector: 'button[type="reset"]',
  standalone: true,
  imports: [],
  templateUrl: './attiribute-selector.component.html',
  styleUrl: './attiribute-selector.component.scss'
})
export class AttiributeSelectorComponent {
  onReset() {
    console.log('Reset button clicked!');
  }
}
