import {AbstractControl,ValidationErrors} from '@angular/forms';



export class EmailValidators {
    static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors | null>{
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                if (( control.value as string)=="sameh@gmail.com") {
                  resolve ({
                    shouldBeUnique : true
                  })  
                } else {
                  resolve(null)
                }
            }, 3000)
        });
    }
}