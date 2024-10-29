import { Component } from '@angular/core';

// Standalone components directly
//  import other components, directives, and pipes used in their templates:
@Component({
  // selector: 'profile-photo', //type selector
  // selector: '.profile-photo',//class selector
  // selector: '[profile-photo]',//attribute selector
  selector: 'profile-photo, [profile-photo]',// multi selector
  standalone: true,
  imports: [],
  templateUrl: './profile-photo.component.html',
  styleUrl: './profile-photo.component.scss',
})
export class ProfilePhotoComponent {}
