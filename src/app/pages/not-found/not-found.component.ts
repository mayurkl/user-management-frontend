import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  // Injecting the Router for navigation
  private router = inject(Router);

  /**
   * Navigate back to User List
   */
  goBack(): void {
    this.router.navigate(['/users-list']);
  }
}
