import 'reflect-metadata';
import { FormBuilder, ControlGroup, Control } from 'angular2/common';


export class GlobalValidator {
  static mailFormat( control: Control ): ValidationResult {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if ( control.value !== '' && !EMAIL_REGEXP.test( control.value ) ) {
      return { 'incorrectMailFormat': true };
    }
    return undefined;
  }

}

interface ValidationResult {
  [key: string]: boolean;
}
