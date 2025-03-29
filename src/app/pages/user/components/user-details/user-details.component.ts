import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-details',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  // Inject ActivatedRoute to get the user ID from the URL
  private route = inject(ActivatedRoute);

  // Inject UserService to fetch user data
  private userService = inject(UserService);

  // Injecting DestroyRef to handle subscriptions cleanup
  private destroyRef = inject(DestroyRef);

  // Injecting the Router for navigation
  private router = inject(Router);

  // Holds the details of the selected user
  userDetails: User | null = null;

  ngOnInit(): void {
    // Get user ID from the URL
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.getUserDetails(userId);
    }
  }

  /**
   * Fetch user details based on the provided user ID.
   * NOTE: As we don't have the endpoint to fetch by for now it
   * retrieves all users and filters the required user by ID.
   *
   * @param id - The user ID for which need to fetch the details
   */
  private getUserDetails(id: string): void {
    this.userService
      .getUsers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((users: User[]) => {
        // Find the user by ID and store the details
        this.userDetails = users.find((user) => user.id === id) || null;
      });
  }

  /**
   * Navigate back to User List
   */
  goBack(): void {
    this.router.navigate(['/users-list']);
  }
}
