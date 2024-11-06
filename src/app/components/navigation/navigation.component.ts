import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NavLink {
  path: string;
  label: string;
}


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule,CommonModule ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  navLinks: NavLink[] = [
    { path: '/selector', label: 'Selector' },
    { path: '/input', label: 'InputExample' },
    { path: '/custom-event', label: 'Custom Event' },
    { path: '/content-project', label: 'Content Projection' },
  ];
}
