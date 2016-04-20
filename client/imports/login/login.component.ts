import 'reflect-metadata';
import {Component, OnInit} from 'angular2/core';
import {RouterLink, Router} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {GlobalValidator} from '../../core/global-validator.ts';
import {LoginService} from './login.service.ts';


@Component({
  selector: 'login',
  templateUrl: '/client/imports/login/login.html',
  directives: [RouterLink],
  providers: [LoginService]
})

export class Login implements OnInit {

  loginForm: ControlGroup;

  constructor( private _loginService: LoginService, private _router: Router ) {}

  ngOnInit() {

    let login = new FormBuilder();

    this.loginForm = login.group({
      email: ['', Validators.compose([Validators.required, GlobalValidator.mailFormat])],
      password: ['', Validators.required]
    });
  }

  Authenticate() {

    if (this.loginForm.valid) {

      this._loginService.authenticate();

      (<Control>this.loginForm.controls['email']).updateValue('');
      (<Control>this.loginForm.controls['password']).updateValue('');

      this._router.navigate(['Sheets']);
    }
  }
}
