import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'artists'
  },
  {
    path: 'artists',
    loadChildren: () => import('./artists/artists.module').then((m) => m.ArtistsModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'artists'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
