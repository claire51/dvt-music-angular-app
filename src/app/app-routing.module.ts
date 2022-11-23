import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistsComponent} from './artists/artists.component';
import {ArtistDetailComponent} from './artist-detail/artist-detail.component';
import {AlbumComponent} from './album/album.component';

const routes: Routes = [
  {
    path: 'artists',
    component: ArtistsComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  },
  {
    path: 'details/:id',
    component: ArtistDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'artist'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ArtistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
