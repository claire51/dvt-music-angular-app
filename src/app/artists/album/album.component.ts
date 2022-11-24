import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../model/album';
import {Artist} from '../../model/artist';
import {ArtistService} from '../../shared/services/artist.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input()
  albumArtist?: Artist;
  albums?: Album[];

  constructor(private readonly artistService: ArtistService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.artistService.getArtistAlbum(this.albumArtist.id)
      .subscribe((result) => {
          this.albums = result.data;
      });
  }

}
