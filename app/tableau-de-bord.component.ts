import { Component, OnInit, Input} from '@angular/core';
import{MonserviceService} from '../monservice.service'; 


@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css'],

})
export class TableauDeBordComponent implements OnInit {

  patrimoine; 
  biens = [];

  lineChartData = 
[
    {
      data: [0, 1600, 1750, 1700, 2000, 1900, 1899],
      label: 'Multimédia'
  
    }, 

    {
      data: [0, 0, 0, 1000, 1500, 1300, 1250],
      label: 'Electroménager'
  
    }, 

    {
      data: [2000, 3000, 2670, 2660,2555, 2467, 2400],
      label: 'Mobilier'
  
    }


]; 

  lineChartOptions = {
    
    };

  lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];

  pieChartData = [2000,1500,2555]; 
  pieChartLabels = ['Multimédia', 'Eléctroménager', 'Mobilier'];
 

  constructor(private serviceCalcul:MonserviceService) {}

  ngOnInit() { 

    this.calculPatrimoine()

  }


/*calculPatrimoine(){

this.serviceCalcul.calculPatrimoine().subscribe(

patrimoine => {
    
     this.patrimoine = patrimoine.result;

    }
); 

} */

calculPatrimoine(){
  
  this.serviceCalcul.getData().subscribe(biens => 
  
  {
    
  this.biens = biens;

    }) 

for (let bien of this.biens) {

console.log(bien.prixachat);
this.patrimoine = this.patrimoine + Number(bien.prixachat); 

}

}


}
