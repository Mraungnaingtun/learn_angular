import { Component } from '@angular/core';

@Component({
  selector: 'button[yt-upload]',
  standalone: true,
  imports: [],
  template: `<div class="my-btn" (click)="onReset()">Upload Video</div>`,
  styles: `.my-btn {
    background-color: #FF0000;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }`,
})
export class CustomYoutubeButton {
  onReset() {
    console.log('Submit button clicked!');
  }
}
