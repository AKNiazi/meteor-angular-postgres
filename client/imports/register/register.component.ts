import 'reflect-metadata';
import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';


 
@Component({
  selector: 'regsiter',
  templateUrl: '/client/imports/register/register.html',
  directives: [RouterLink]
})
export class Register {}