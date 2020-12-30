import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators}from '../validators/username.validators';
import {EmailValidators} from  '../validators/email.validators';
@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.scss']
})
export class SinupComponent implements OnInit {


  form = new FormGroup({
    name: new FormControl('',Validators.required),
    username: new FormControl('',[Validators.required,UsernameValidators.cannotcontainSpace]),
    email: new FormControl('',[Validators.required,Validators.email,EmailValidator.shouldBeUnique]),
    password: new FormControl('',Validators.required)

  });
  constructor() { }
 
  ngOnInit(): void {
  }
  get name(){
    return this.form.get('name');
  }
  get username(){
    return this.form.get('username');
 }
  get Email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }

}
