import { Component, OnInit } from '@angular/core';
import { 
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/core';

@Component({
  selector: 'app-coffrefort-mosaique',
  templateUrl: './coffrefort-mosaique.component.html',
  styleUrls: ['./coffrefort-mosaique.component.css'], 
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
export class CoffrefortMosaiqueComponent implements OnInit {
objets;
state: string = 'inactive'; 

  constructor() { }

  ngOnInit() {

     this.objets= [

     {
        img: "assets/images/image2.jpeg",
        description: "Camera numérique NIKON ",
        prixneuf:"1300€", 
        achat:"09/16", 
        evaluation: "900€ "
      },
    
      {
        img: "assets/images/image2.jpeg",
        description: "Camera numérique NIKON ",
        prixneuf:"1300",
        achat:"07/16", 
        evaluation:"899€ "
      }, 

       {
        img: "assets/images/image2.jpeg",
        description: "Camera numérique NIKON ",
        prixneuf:"1300",
        achat:"07/16", 
        evaluation:"899€ "
      }, 
       {
        img: "assets/images/image2.jpeg",
         description: "Camera numérique NIKON ",
        prixneuf:"1300",
        achat:"07/16", 
        evaluation:"899€ "
      }
]
  }


toggleMove() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }


addobjet(){

  this.objets.push(
    
     {  
        img: "assets/images/image2.jpeg",
        description: "Camera numérique NIKON ",
        prixneuf:"700€", 
        achat:"09/16", 
        evaluation:"500€ ",

      }
      
  )

}

}
