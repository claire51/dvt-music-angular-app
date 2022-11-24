import {Component, Input, OnInit} from '@angular/core';
import {Track} from '../../model/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input()
  track!: Track;
  constructor() { }

  ngOnInit(): void {
  }

}
