import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'custom-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card appearance="raised">
      <mat-card-header>
        <!-- Title Content -->
        <ng-content select="card-title"></ng-content>
      </mat-card-header>
      
      <!-- Body Content -->
      <mat-card-content>
        <ng-content select="card-body"></ng-content>
      </mat-card-content>
      
      <!-- Optional Footer (if any) -->
      <mat-card-actions>
        <ng-content select="card-actions"></ng-content>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
     mat-card {
      margin: 16px;
      padding: 16px;
    }

  `]
})
export class CustomCardComponent { }
