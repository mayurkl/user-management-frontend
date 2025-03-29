import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Base API URL fetched from environment settings
  private apiUrl = environment.apiUrl;

  // Injecting HttpClient to make HTTP requests
  http = inject(HttpClient);

  /**
   * Fetches the list of users from the API.
   * @returns Observable<User[]> - An observable that emits an array of User objects.
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/64KB.json');
  }
}
