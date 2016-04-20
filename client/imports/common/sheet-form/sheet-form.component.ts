import 'reflect-metadata';
import {Component, OnInit} from 'angular2/core';
import {RouterLink, Router} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {SheetFormService} from './sheet-form.service.ts';


@Component({
  selector: 'sheet-form',
  templateUrl: '/client/imports/common/sheet-form/sheet-form.html',
  directives: [RouterLink],
  providers: [SheetFormService]
})

export class SheetForm implements OnInit {

  sheetForm: ControlGroup;

  constructor( private _sheetformService: SheetFormService, private _router: Router ) {}

  ngOnInit() {

    let sheet = new FormBuilder();

    this.sheetForm = sheet.group({
      title: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required]
    });
  }

  addUser() {
    console.log("user added");
  }

  create() {

    if (this.sheetForm.valid) {

      this._sheetformService.create();

      this._router.navigate(['Sheets']);
    }
  }
}
