import 'reflect-metadata';
import {Component, OnInit} from 'angular2/core';
import {RouterLink, Router} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'header',
  templateUrl: '/client/imports/common/header/header.html',
  directives: [RouterLink, DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
})

export class Header implements OnInit {

  constructor( private _router: Router ) {}

  ngOnInit() {

  }

}
