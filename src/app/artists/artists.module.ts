import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArtistsComponent} from './artists.component';
import {FanFormatterPipe} from '../shared/pipes/fan-formatter.pipe';
import {DurationFormatterPipe} from '../shared/pipes/duration-formatter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ArtistsRoutingModule} from './artists-routing.module';
import {TrackComponent} from './track/track.component';
import {TracklistComponent} from './tracklist/tracklist.component';
import {AlbumComponent} from './album/album.component';
import {ArtistDetailComponent} from './artist-detail/artist-detail.component';
import {ArtistComponent} from './artist/artist.component';
import {LoadingComponent} from '../loading/loading.component';

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistComponent,
    ArtistDetailComponent,
    AlbumComponent,
    FanFormatterPipe,
    DurationFormatterPipe,
    TrackComponent,
    LoadingComponent,
    TracklistComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArtistsRoutingModule,
  ]
})
export class ArtistsModule {
}
