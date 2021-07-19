import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function DemoEntryInc(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {};
}
