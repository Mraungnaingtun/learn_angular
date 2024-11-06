import { Routes } from '@angular/router';
import { HomeComponent } from './components/selector/home/home.component';
import { InputExampleComponent } from './components/input-properties/input-example/input-example.component';
import { CustomEventComponent } from './components/custom-event/custom-event/custom-event.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection/content-projection.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'input', component: InputExampleComponent },
  { path: 'selector', component: HomeComponent },
  { path: 'custom-event', component: CustomEventComponent },
  { path:  'content-project', component: ContentProjectionComponent}
];
