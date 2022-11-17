import * as moment from 'moment';

export interface Day {
  value: moment.Moment;
  selected: boolean;
  disabled: boolean;
  active: boolean;
}
export interface Week {
  days: Day[];
}
