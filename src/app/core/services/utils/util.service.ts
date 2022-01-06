import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  validatePhoNum = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value == undefined || value == null) {
        return null;
      } else {
        if (value < 999 || value > 999999999999999) {
          return { notValid: true };
        } else {
          return null;
        }
      }
    }
  }
}
