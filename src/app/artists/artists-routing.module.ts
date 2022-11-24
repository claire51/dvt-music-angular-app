import {RouterModule, Routes} from '@angular/router';
import {ArtistsComponent} from './artists.component';
import {NgModule} from '@angular/core';
import {AlbumComponent} from './album/album.component';
import {ArtistDetailComponent} from './artist-detail/artist-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ArtistsComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  },
  {
    path: 'details/:id',
    component: ArtistDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule {
}
