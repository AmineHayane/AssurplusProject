import { Injectable } from '@angular/core';
/*import { InMemoryDbService } from 'angular-in-memory-web-api';*/


@Injectable()
export class InMemoryDataService {

  constructor() { }


   createDb()

    {
    
    let objets = [

      {id: 11, img: "assets/images/image1.jpeg",
        description: "Mac book pro ",
        prixneuf:"1300€", 
        achat:"09/16", 
        evaluation: "900€ "},
      {id: 12,  img: "assets/images/image2.jpeg",
        description: "Camera NIKON ",
        prixneuf:"700€", 
        achat:"09/16", 
        evaluation: "500€ "},
      {id: 13, img: "assets/images/image1.jpeg",
        description: "Mac book pro",
        prixneuf:"1300", 
        achat:"07/16", 
        evaluation: "899€ "},
  
    ];
    return {objets};
  }
  
}
