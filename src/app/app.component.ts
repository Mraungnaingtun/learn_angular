import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SecondComponent } from "./components/second/second.component";
import { FirstComponent } from "./components/first/first.component";
import { ThirdComponent } from "./components/third/third.component";
import { ProfilePhotoComponent } from "./components/profile-photo/profile-photo.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SecondComponent, FirstComponent, ThirdComponent, ProfilePhotoComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learn_angular_with_me';
}
