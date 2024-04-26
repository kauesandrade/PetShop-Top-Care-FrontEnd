import { AbstractControl } from '@angular/forms';

export function DateValidator(control: AbstractControl) {
  let date = new Date(control.value);
  date.setDate(date.getDate() + 1);

  let today = new Date();

  if (date.getFullYear() <= today.getFullYear()) {
    if (date.getMonth() <= today.getMonth()) {
      if (date.getDate() <= today.getDate()) {
        return { LessThanToday: true };
      }
    }
  }

  if (date.getDay() == 0 || date.getDay() == 6) {
    return { IsWeekend: true };
  }

  return null;
}
