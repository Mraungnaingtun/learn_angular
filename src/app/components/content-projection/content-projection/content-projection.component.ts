import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomCardComponent } from "../custom-card/custom-card.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CustomCardComponent,MatButtonModule],
  templateUrl: './content-projection.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {

}
