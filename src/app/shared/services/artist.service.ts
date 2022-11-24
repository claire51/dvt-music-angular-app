import {Injectable} from '@angular/core';
import {BaseHttpServiceService} from './base-http-service.service';
import {Artist} from '../../model/artist';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Search} from '../../model/search';
import {Albums} from '../../model/albums';
import {Tracklist} from '../../model/tracklist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private readonly http: BaseHttpServiceService<Artist>) {
  }

  searchArtists(query: string): Observable<Search> {
    return this.http.get(`${environment.baseUrl}/search/artist?q=${query}`);
  }

  getArtistDetails(query: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/artist/${query}`);
  }

  getArtistAlbum(query: number): Observable<Albums> {
    return this.http.get(`${environment.baseUrl}/artist/${query}/albums`);
  }

  getArtistTracklist(query: number): Observable<Tracklist> {
    return this.http.get(`${environment.baseUrl}/artist/${query}/top?limit=5`);
  }
}
