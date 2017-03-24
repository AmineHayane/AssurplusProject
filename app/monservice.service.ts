import {Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'; 
import 'rxjs/add/operator/map';


@Injectable()
export class MonserviceService {
 
  private url : string = "coffrefort/data.json" 
   /* Url du serveur*/

  constructor(private http:Http) {}

  
  getData() {

    return this.http.get('http://localhost:8080/api/objets')
      .map(res => res.json());
  }


  addUser(newUser) {


    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8080/api/newuser' ,newUser, {headers:headers} )
         .map(res => res.json()); 

  }


  AjoutObjet(newObject) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

     return this.http.post('http://localhost:8080/api/ajoutobjet', JSON.stringify(newObject), {headers:headers})
      .map(res => res.json());

  }

  deleteObject(id) {

     var headers = new Headers();
     headers.append('Content-Type', 'application/json');

    return this.http.delete('http://localhost:8080/api/supprimerobjet/' +id  ,{headers:headers})
    .map(res => res.json());

  }

}


