import { AbstractControl, ValidatorFn } from '@angular/forms';

export class DateValidator {
  static isLessThanToday(control: AbstractControl) {
    let date = new Date(control.value);
    date.setDate(date.getDate() + 1);

    let today = new Date();

    if (date.getFullYear() <= today.getFullYear()) {
      if (date.getMonth() <= today.getMonth()) {
        if (date.getDate() <= today.getDate()) {
          return { lessThanToday: true };
        }
      }
    }
    return null;
  }

  static isWeekend(control: AbstractControl) {
    let date = new Date(control.value);
    date.setDate(date.getDate() + 1);

    if (date.getDay() == 0 || date.getDay() == 6) {
      return { isWeekend: true };
    }
    return null;
  }

  static IsNotBetween(from: string, to: string): ValidatorFn {
    return (control: AbstractControl) => {
      let fromDate = new Date(from);

      let toDate = new Date();
      if (to != 'today') {
        toDate = new Date(to);
      }

      let date = control.value.split('/');
      date = [date[1], date[0], date[2]].join('/');
      date = new Date(date);

      if (date <= fromDate || date >= toDate) {
        return { isNotBetween: true };
      }
      return null;
    };
  }
}
