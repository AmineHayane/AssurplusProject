import { Component, OnInit, ElementRef} from '@angular/core';
import {MonserviceService} from './monservice.service'; 

declare var jQuery : any;


@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 

  
})
export class AppComponent implements OnInit {


constructor(private elRef : ElementRef, private postsService: MonserviceService){}

ngOnInit()  { 


}

openSidenav() : any {

  jQuery(this.elRef.nativeElement).find('.ui.labeled.icon.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle'); 

}

closeSidenav() : any {

  jQuery(this.elRef.nativeElement).find('.ui.labeled.icon.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('hide'); 

}


ShowLoggingDimmer() : any {

  jQuery(this.elRef.nativeElement).find('.segment').dimmer('show'); 

} 

HideLoggingDimmer() : any {

  jQuery(this.elRef.nativeElement).find('.segment').dimmer('hide'); 

} 


displayDimmer() : any { 
jQuery(this.elRef.nativeElement).find('.special.cards .image').dimmer({
  on: 'hover'
}); 

  }
  

displayModal() : any {

  jQuery(this.elRef.nativeElement).find('.ui.modal').modal({
    inverted: true
  }).modal('show'); 

} 

} 



