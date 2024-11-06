import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-panel',
  standalone: true,
  imports: [],
  templateUrl: './expandable-panel.component.html',
  styleUrl: './expandable-panel.component.scss'
})
export class ExpandablePanel {

  @Output() panelClosed = new EventEmitter<void>();

  closePanel(): void {
    console.log('The panel has been closed!');
    this.panelClosed.emit();
  }
}
