import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';


interface Item {
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  @Input({ required: true }) item!: Item;
  @Output() itemRemoved = new EventEmitter<void>();
  @HostBinding('attr.aria-label') ariaLabel = 'This is a clickable button with a tooltip';

  removeItem(): void {
    this.itemRemoved.emit();
  }
}
