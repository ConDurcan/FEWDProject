import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'vodka',
    loadComponent: () => import('./vodka/vodka.page').then( m => m.VodkaPage)
  },
  {
    path: 'rum',
    loadComponent: () => import('./rum/rum.page').then( m => m.RumPage)
  },
  {
    path: 'whiskey',
    loadComponent: () => import('./whiskey/whiskey.page').then( m => m.WhiskeyPage)
  },
  {
    path: 'tequila',
    loadComponent: () => import('./tequila/tequila.page').then( m => m.TequilaPage)
  },
  {
    path: 'gin',
    loadComponent: () => import('./gin/gin.page').then( m => m.GinPage)
  },
  {
    path: 'drink-details/:id',
    loadComponent: () => import('./drink-details/drink-details.page').then( m => m.DrinkDetailsPage)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./favorites/favorites.page').then( m => m.FavoritesPage)
  },
];
