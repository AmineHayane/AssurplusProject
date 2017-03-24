import { Component, OnInit, ElementRef } from '@angular/core';

declare var jQuery : any;


@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.css']
})
export class MoncompteComponent implements OnInit {

  constructor(private elRef : ElementRef) { }

  ngOnInit() : any {

    jQuery(this.elRef.nativeElement).find('.special.cards .image').dimmer({
  on: 'hover'
});

  }
  
}
