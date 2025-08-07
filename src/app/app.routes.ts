import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'home',
    loadComponent: () => import('./page/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./page/detail/detail.component').then(m => m.DetailComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./page/cart/cart.component').then(m => m.CartComponent),
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '**',
    loadComponent: () => import('./page/not-found/not-found.component').then(m => m.NotFoundComponent),
  }
];

