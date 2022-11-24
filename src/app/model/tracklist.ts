import { Track } from './track';
export interface Tracklist {
    data: Track[];
    total: number;
    next: string;
}
