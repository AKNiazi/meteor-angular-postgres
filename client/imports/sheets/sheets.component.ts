import 'reflect-metadata';
import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {Header} from '../common/header/header.component.ts';


@Component({
  selector: 'login',
  templateUrl: '/client/imports/sheets/sheets.html',
  directives: [Header, RouterLink]
})

export class Sheets {}
