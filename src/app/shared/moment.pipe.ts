import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {
  transform(m: moment.Moment | null, format: string = 'MMMM YYYY'): string {
    if (!m) {
      return '';
    }
    return m.format(format);
  }
}
