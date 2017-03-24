import { Component, OnInit, ElementRef } from '@angular/core';
import {objet} from './objet'; 
import{MonserviceService} from '../monservice.service'; 

declare var jQuery : any;

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

    myObjet = new objet(); 

    visibility : Boolean = true; 
   
    duration; 
    durationAnnee;
    etatBien:string; 

    neuf:Boolean; 

    complete:Boolean; 

    choixPhoto: Boolean =true; 

    
  constructor(private el:ElementRef, private serviceBiens:MonserviceService) { }

  ngOnInit() {
    
  }

  dropDown() : any {

  jQuery(this.el.nativeElement).find('.ui.dropdown').dropdown(); 

}


changeVisibility() {

 this.visibility = (this.visibility === true ? false : true); 

}

changeChoixPhoto() {

 this.choixPhoto = (this.choixPhoto === true ? false : true); 

}


/*
computeDuration() {

this.duration = (Date.now()) - + (new Date(this.myObjet.dateAchat));

this.durationAnnee = Math.trunc((this.duration /((8.64*10000000)*365))); 


}

computeValue() {

  this.computeDuration(); 



  if (this.myObjet.categorie="TV")
  
  {


     if (this.durationAnnee==0) {

     this.myObjet.valeur= Math.round(this.myObjet.prixAchat);
     this.neuf=true;
     this.complete=false; 

  }


    if (this.durationAnnee==1) {

     this.myObjet.valeur= Math.round(this.myObjet.prixAchat*0.9); 
     this.complete=true; 

  }

  if (this.durationAnnee==2) {

     this.myObjet.valeur= Math.round(this.myObjet.prixAchat*0.8);
     this.complete=true; 


  }



}



}

*/


addobjet() {

var newObject = {

        prixachat: this.myObjet.prixachat, 
        description: this.myObjet.description, 
        dateachat: this.myObjet.dateachat,
        
}
  
this.serviceBiens.AjoutObjet(newObject).subscribe();


}

}

