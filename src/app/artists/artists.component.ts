import {Component, OnInit} from '@angular/core';
import {Artist} from '../model/artist';
import {ArtistService} from '../shared/services/artist.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  searchForm!: FormGroup;
  artists?: Artist[] = new Array();
  loading = false;

  constructor(
    private router: Router, private fb: FormBuilder,
    private readonly artistService: ArtistService,
  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchInput: ['', Validators.required],
    });
  }

  async searchArtist(): Promise<void> {
    this.artists = new Array();
    if (this.searchForm.valid) {
      this.loading = true;
      await this.artistService.searchArtists(this.searchForm.value.searchInput).subscribe((response) => {
        this.artists = response.data;
        this.loading = false;
      });

    }
  }
}
