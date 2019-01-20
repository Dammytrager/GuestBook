import { ValidatorFn, AbstractControl } from '@angular/forms'

export function patternMatch(value:RegExp):ValidatorFn{
  return (control:AbstractControl):{[key:string]:boolean} | null=>{
    let pass=value.test(control.value)
    return pass?null:{'patternFail':true}
  }
}
