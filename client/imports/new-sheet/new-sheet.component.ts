import 'reflect-metadata';
import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {Header} from '../common/header/header.component.ts';
import {SheetForm} from '../common/sheet-form/sheet-form.component.ts';


@Component({
  selector: 'login',
  templateUrl: '/client/imports/new-sheet/new-sheet.html',
  directives: [Header, SheetForm, RouterLink]
})

export class NewSheet {}
