import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {Login} from './imports/login/login.component.ts';
import {Register} from './imports/register/register.component.ts';
import {Sheets} from './imports/sheets/sheets.component.ts';

 
@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/login', as: 'Login', component: Login, useAsDefault: true },
  { path: '/register', as: 'Register', component: Register },
  { path: '/sheets', as: 'Sheets', component: Sheets }
])
class App {}
 
bootstrap(App, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);