import { ValidatorFn, AbstractControl } from '@angular/forms'

export function patternMatch(value:RegExp):ValidatorFn{
  return (control:AbstractControl):{[key:string]:boolean} | null=>{
    let pass=value.test(control.value)
    return pass?null:{'patternFail':true}
  }
}

export function setDate(value): string {
  value = parseInt(value);
  let now = new Date(value);
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let date = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let period;
  if (hour < 12) {
    hour = hour == 0 ? 12 : hour;
    period = 'AM';
  } else if (hour >= 12) {
    hour = hour == 12 ? 12 : hour - 12;
    period = 'PM';
  }
  return month + ' ' + date + ', ' + year + ' at ' + hour + ':' + minute + ' ' + period;
}
