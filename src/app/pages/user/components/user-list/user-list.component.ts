import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  // Injecting the UserService to fetch user data
  private userService = inject(UserService);

  // Injecting the Router for navigation
  private router = inject(Router);

  // Injecting DestroyRef to handle subscriptions cleanup
  private destroyRef = inject(DestroyRef);

  // Data source for the table
  dataSource = new MatTableDataSource<User>([]);

  // Stores dynamic table headers
  tableHeaders: string[] = [];

  // Stores table headers including the "actions" column
  tableHeadersWithActions: string[] = [];

  // ViewChild to access the paginator component
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ViewChild to access the sorting component
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAllUsers();
  }

  /**
   * Fetches the list of users from the UserService.
   * Populates the table with dynamic columns and data.
   */
  private getAllUsers(): void {
    this.userService
      .getUsers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (users: User[]) => {
          if (users.length > 0) {
            this.tableHeaders = Object.keys(users[0]); // Extract headers dynamically
            this.tableHeadersWithActions = [...this.tableHeaders, 'actions']; // Append "actions" column
          }
          // Initialize table data with an 'isEditing' flag for each user
          this.dataSource.data = users.map((user) => ({
            ...user,
            isEditing: false,
          }));

          // Assign paginator and sorting to the data source
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (error) => console.error('Error fetching users:', error),
      });
  }

  /**
   * Navigates to the user details page if the row is not in edit mode.
   *
   * @param user - The selected user object
   */
  goToDetails(user: User): void {
    if (!user.isEditing) {
      this.router.navigate(['/user', user.id]);
    }
  }

  /**
   * Applies a filter to the data source based on the user's input.
   *
   * @param event - The input event triggered when the user types in the search field.
   */
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
  }

  /**
   * Toggles edit mode for a specific user.
   * Stops event propagation to prevent row click navigation.
   *
   * @param user - The user object to be edited
   * @param event - The click event
   */
  toggleEdit(user: User, event: Event): void {
    event.stopPropagation(); // Prevent row click from triggering navigation
    user.isEditing = !user.isEditing; // Toggle edit mode
  }
}
