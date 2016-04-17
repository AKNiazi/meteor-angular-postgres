import 'reflect-metadata';
import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';


 
@Component({
  selector: 'sheets',
  templateUrl: '/client/imports/sheets/sheets.html',
  directives: [RouterLink]
})
export class Sheets {}