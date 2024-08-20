import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'band', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'music', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'photos', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'videos', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'news', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'events', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
