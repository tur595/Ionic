import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'restaurants',
    loadComponent: () =>
      import('./pages/restaurants/restaurants.page').then(
        (m) => m.RestaurantsPage
      ),
  },
  {
    path: '',
    redirectTo: 'restaurants',
    pathMatch: 'full',
  },
];
