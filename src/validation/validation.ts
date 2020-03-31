import { ValidationLogic } from '../interfaces/Validation';

export function validateInputs(validateInput: ValidationLogic) {
  let isValid = true;
  if (validateInput.required) {
    isValid = isValid && validateInput.value.trim().length !== 0;
  }
  if (
    validateInput.minLength != null &&
    typeof validateInput.value === 'string'
  ) {
    isValid = isValid && validateInput.value.length >= validateInput.minLength;
  }
  if (
    validateInput.maxLength != null &&
    typeof validateInput.value === 'string'
  ) {
    isValid = isValid && validateInput.value.length <= validateInput.maxLength;
  }
  return isValid;
}
