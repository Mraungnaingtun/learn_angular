import { Component, Input } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.scss'
})
export class InputChildComponent {
  @Input({required: true}) person!: Person;
  @Input() gender!: string | undefined;
}
