import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Output() valueChanged = new EventEmitter<number>();
  @Output() thumbDropped = new EventEmitter<{ pointerX: number, pointerY: number }>();

  giveRating(value: number): void {
    // Emit a primitive value representing the rating (1 or -1)
    this.valueChanged.emit(value);

    // Emit custom event with pointer coordinates
    const pointerX = Math.floor(Math.random() * 500);
    const pointerY = Math.floor(Math.random() * 500);
    this.thumbDropped.emit({ pointerX, pointerY });
  }
}
