import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { ThirdComponent } from './components/third/third.component';
import { InputExampleComponent } from './components/input-example/input-example.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'profile-photo', component: ProfilePhotoComponent },
  { path: 'input', component: InputExampleComponent },
];
