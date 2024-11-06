import { Component } from '@angular/core';
import { ExpandablePanel } from '../expandable-panel/expandable-panel.component';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CommonModule } from '@angular/common';
import { RatingComponent } from "../rating/rating.component";

@Component({
  selector: 'app-custom-event',
  standalone: true,
  imports: [ExpandablePanel, CartItemComponent, CommonModule, RatingComponent],
  templateUrl: './custom-event.component.html',
  styleUrl: './custom-event.component.scss'
})
export class CustomEventComponent {

  isPanelClosed = false;
  cartItems = [
    { name: 'Laptop', price: 999 },
    { name: 'Headphones', price: 199 },
    { name: 'Keyboard', price: 89 },
  ];

  onPanelClosed(): void {
    this.isPanelClosed = true;
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }


  currentRating: number | null = null;
  thumbCoordinates: { pointerX: number, pointerY: number } | null = null;

  onRatingChange(value: number): void {
    this.currentRating = value;
    console.log(`Rating changed: ${value}`);
  }

  onThumbDropped(coordinates: { pointerX: number, pointerY: number }): void {
    this.thumbCoordinates = coordinates;
    console.log(`Thumb dropped at X: ${coordinates.pointerX}, Y: ${coordinates.pointerY}`);
  }

  onValueChanged(value: number): void {
    console.log('Slider value:', value);
  }
}
