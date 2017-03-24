import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { MaterialModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {RouterModule, Routes } from '@angular/router';
import{MonserviceService} from './monservice.service'; 

import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CoffrefortComponent } from './coffrefort/coffrefort.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { MaDirectiveDirective } from './ma-directive.directive';
import { CoffrefortMosaiqueComponent } from './coffrefort-mosaique/coffrefort-mosaique.component';
import { DialogResultComponent } from './coffrefort/dialog-result/dialog-result.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { ProduitComponent } from './produit/produit.component';
import { InformationsProduitComponent } from './informations-produit/informations-produit.component';
import { JustificatifsProduitComponent } from './justificatifs-produit/justificatifs-produit.component';
import { ValidationComponent } from './validation/validation.component';

const appRoutes: Routes = [
  
  { path: 'coffrefort',   component: CoffrefortComponent },
  { path: 'moncompte',   component: MoncompteComponent},
  { path: 'coffrefort/mosaique',   component: CoffrefortMosaiqueComponent},
  { path: 'inscription',   component: FormulaireInscriptionComponent},
  { path: 'board',  component: TableauDeBordComponent }, 
  
  { path: 'ajoutProduit', component: ProduitComponent },
  { path: 'informationsProduit', component: InformationsProduitComponent },
  { path: 'justificatifsProduit', component: JustificatifsProduitComponent },
  { path: 'validationProduit', component: ValidationComponent}

]; 


@NgModule({
  declarations: [
    AppComponent,
    CoffrefortComponent,
    MoncompteComponent,
    MaDirectiveDirective,
    CoffrefortMosaiqueComponent,
    DialogResultComponent,
    FormulaireInscriptionComponent,
    TableauDeBordComponent,
    ProduitComponent,
    InformationsProduitComponent,
    JustificatifsProduitComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(), 
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  
    /*InMemoryWebApiModule.forRoot(InMemoryDataService),*/
  ],

  providers: [MonserviceService],
  bootstrap: [AppComponent], 
})
export class AppModule {}
