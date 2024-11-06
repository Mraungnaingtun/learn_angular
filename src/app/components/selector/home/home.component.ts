import { Component } from '@angular/core';
import { ProfilePhotoComponent } from "../profile-photo/profile-photo.component";
import { AttiributeSelectorComponent } from '../attiribute-selector/attiribute-selector.component';
import { CustomYoutubeButton } from '../custom-selector/youtube-btn';
import { CustompipePipe } from '../../../pipes/custompipe.pipe';

@Component({
  selector: 'home',
  standalone: true,
  imports: [ProfilePhotoComponent,AttiributeSelectorComponent,CustomYoutubeButton,CustompipePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
