import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormatter'
})
export class DurationFormatterPipe implements PipeTransform {

  transform(duration: number): string {
    const time = new Date(duration * 1000);
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

}
