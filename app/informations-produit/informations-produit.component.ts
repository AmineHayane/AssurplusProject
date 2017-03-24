import { Component, OnInit, ElementRef} from '@angular/core';

declare var jQuery : any;


@Component({
  selector: 'app-informations-produit',
  templateUrl: './informations-produit.component.html',
  styleUrls: ['./informations-produit.component.css']
})


export class InformationsProduitComponent implements OnInit {

  visibility : Boolean = false; 

  constructor(private el:ElementRef) { }

  ngOnInit() {
  }

}
