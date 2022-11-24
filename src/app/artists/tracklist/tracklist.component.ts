import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Track} from '../../model/track';
import {ArtistService} from '../../shared/services/artist.service';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss']
})
export class TracklistComponent implements OnInit {
  tracks?: Track[];
  artistId!: number;

  constructor(private activatedRoute: ActivatedRoute, private readonly artistService: ArtistService) {
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.artistId = Number(params.get('id'));
    });

    this.artistService.getArtistTracklist(this.artistId)
      .subscribe((result) => {
        this.tracks = result.data;
      });
  }

}
