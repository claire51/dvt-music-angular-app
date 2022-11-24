import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArtistService} from '../../shared/services/artist.service';
import {Artist} from '../../model/artist';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  artist!: Artist;
  artistId?: number;

  constructor(private activatedRoute: ActivatedRoute, private readonly artistService: ArtistService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.artistId = Number(params.get('id'));

      this.artistService.getArtistDetails(this.artistId)
        .subscribe((result) => {
          this.artist = result;
        });

    });
  }
}
