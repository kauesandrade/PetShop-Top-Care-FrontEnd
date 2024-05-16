import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl) {
  if (!/[A-Z]/.test(control.value)) {
    return { uppercase: true };
  } else if (!/[a-z]/.test(control.value)) {
    return { lowercase: true };
  } else if (!/\d/.test(control.value)) {
    return { number: true };
  } else if (control.value.length < 8) {
    return { length: true };
  }

  return null;
}
