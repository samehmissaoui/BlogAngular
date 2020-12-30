import {AbstractControl,ValidationErrors} from '@angular/forms';

export class UsernameValidators {
    static cannotcontainSpace (control:AbstractControl):ValidationErrors | null {
        if((control.value as string).indexOf(' ')> -1) {
            return {
            cannotcontainSpace:true}
        }
        return null
    }
}