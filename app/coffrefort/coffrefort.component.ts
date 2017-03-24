import { Component, OnInit, ElementRef } from '@angular/core';
import { 
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/core';

import {Http, Response} from '@angular/http'; 

import {MdDialog} from '@angular/material';
import {MdDialogRef} from '@angular/material';
import { DialogResultComponent } from './dialog-result/dialog-result.component';
import{MonserviceService} from '../monservice.service'; 


declare var jQuery : any;

@Component({
  selector: 'app-coffrefort',
  templateUrl: './coffrefort.component.html',
  styleUrls: ['./coffrefort.component.css'],
  animations: [

        trigger('focusInput', [
            state('inactive', style({
                
                width:"0px", 
                

            })),
            state('active', style({
               
                width:"240px", 
                
            })),
            transition('inactive => active', animate('400ms ease-in')),
            
        ]),


    ]


})

export class CoffrefortComponent implements OnInit {

  
  state: string = 'inactive'; 
  biens=[]; 
  patrimoine: Number= 0; 


  constructor(public dialog: MdDialog, private serviceBiens:MonserviceService, private elRef:ElementRef, private http:Http) { }

  ngOnInit()  {
  

     // Retrieve posts from the API
   this.serviceBiens.getData().subscribe(biens => {
    
     this.biens = biens; 

    });

    this.calculPatrimoine();
    this.openConfirmation(); 

  
} 


 toggleMove() {

        this.state = (this.state === 'inactive' ? 'active' : 'inactive'); 
    }

 openDialog() {

        let dialogRef = this.dialog.open(DialogResultComponent, {
          height:'400px',
          width:'600px',   
      }
    
      );

    }

animateCards() :any  {

  jQuery(this.elRef.nativeElement).find('.card').transition({
    debug     : true,
    animation : 'fade up',
    duration  : 1000,
    interval  : 100
  }); 
}

JiggleOnHover() : any {

  jQuery(this.elRef.nativeElement).find('h2').transition('pulse'); 

}


calculPatrimoine() {

for (let bien of this.biens) {

this.patrimoine = this.patrimoine + bien.prixachat; 

console.log(this.biens); 

}

}

deleteObject(id){

this.serviceBiens.deleteObject(id)
.subscribe(); 

}


deleteOnView(i){

this.biens.splice(i,1); 

}


openConfirmation() : any {

  jQuery(this.elRef.nativeElement).dimmer('show'); 

} 


}

