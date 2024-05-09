import { AbstractControl } from '@angular/forms';

export function EmptyValidator(control: AbstractControl) {
  if (!control.value.toString().trim()) {
    return { isEmpty: true };
  }
  return null;
}
