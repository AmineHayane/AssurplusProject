import { Component, OnInit, ElementRef} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import{MonserviceService} from '../monservice.service'; 



@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.css']
})


export class FormulaireInscriptionComponent implements OnInit {

  submitted = false; 
  data: string; 

  password:string ; 
  email:string; 
  passwordbis: string;

  samePasswords: Boolean;  
  
  clientPassword: string; 

  message:string; 
 
  


  constructor(private userService:MonserviceService) {}


  ngOnInit() {

  }

  comparePasswords () {

    if (this.password!=this.passwordbis) 
    
    {this.samePasswords = true;}

    else { this.samePasswords= false;} 

  }


   onSubmit(data) {

    if (this.samePasswords===false)
{



    this.submitted=true; 
    this.data = JSON.stringify(data);
    console.log(this.data);

    var dataClient = JSON.parse(this.data);

    console.log(dataClient.ClientEmail); 
    console.log(dataClient.ClientMotDePasse); 

    var newUser = this.data; 
   
    this.userService.addUser(newUser)
    .subscribe(message => {
      this.message = message; 
    });
    

}

  }

 

}
