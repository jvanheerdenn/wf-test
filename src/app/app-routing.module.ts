import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.module').then((m) => m.MenuModule)
  },
  {
    path: 'gift-cards',
    loadChildren: () => import('./components/gift-cards/gift-cards.module').then((m) => m.GiftCardsModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./components/details/details.module').then((m) => m.DetailsModule)
  },
  {
    path: 'rewards',
    loadChildren: () => import('./components/rewards/rewards.module').then((m) => m.RewardsModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./components/details/details.module').then((m) => m.DetailsModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'menu'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
