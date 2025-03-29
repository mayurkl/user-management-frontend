import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-list',
    pathMatch: 'full',
  },
  {
    path: 'users-list',
    loadComponent: () =>
      import('./pages/user/components/user-list/user-list.component').then(
        (m) => m.UserListComponent
      ),
  },
  {
    path: 'user/:id',
    loadComponent: () =>
      import(
        './pages/user/components/user-details/user-details.component'
      ).then((m) => m.UserDetailsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
