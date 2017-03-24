import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {MdDialog} from '@angular/material';
 


@Component({
  selector: 'app-dialog-result',
  template: './dialog-result.component.html',
  styleUrls: ['./dialog-result.component.css']
})
export class DialogResultComponent implements OnInit {

  constructor(public dialogRef : MdDialogRef<DialogResultComponent>) {}

  ngOnInit() {
  }

}
