import 'reflect-metadata';
import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {GlobalValidator} from '../core/global-validator.ts';
import {RegisterService} from './register.service.ts';


@Component({
  selector: 'regsiter',
  templateUrl: '/client/imports/register/register.html',
  directives: [RouterLink],
  providers: [RegisterService]
})

export class Register implements OnInit {

  registerForm: ControlGroup;

  constructor(private _registerService: RegisterService) { }

  ngOnInit() {
    let register = new FormBuilder();
    this.registerForm = register.group({
      email: ['', Validators.compose([Validators.required, GlobalValidator.mailFormat])],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
  }

    registerUser() {
      if (this.registerForm.valid) {
        this._registerService.register(this.registerForm.value);
        (<Control>this.registerForm.controls['email']).updateValue('');
        (<Control>this.registerForm.controls['password']).updateValue('');
        (<Control>this.registerForm.controls['cpassword']).updateValue('');
      }
    }
}
