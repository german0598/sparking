import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Estacionamiento } from '../interfaces/estacionamiento';
import { Usuario } from '../interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  private itemsCollection: AngularFirestoreCollection<any>;
  public pestacionamientos: Estacionamiento[] = [];

  constructor( private afs: AngularFirestore ) {

  }

  cargarEstacionamientos(){    
    //console.log("desde Cargar Estacionamiento");    
    this.itemsCollection = this.afs.collection<Estacionamiento>('estacionamientos');

    return this.itemsCollection.valueChanges()
                               .pipe( map ( (estacionamientos:Estacionamiento[])=> {
                                  //console.error("ESTACIONAMIENTOS:")
                                  //console.log(estacionamientos);

                                  this.pestacionamientos = [];
                                  /** recorremos cada uno de los estacionamientos y los guardamos 
                                   *  en la lista "pestacionamientos"
                                   */
                                  estacionamientos.forEach(estacionamiento => {
                                    this.pestacionamientos.push( estacionamiento );
                                  });


                               }) );

  }

  addUser( usuario ){
    
    this.itemsCollection = this.afs.collection<Usuario>('usuarios');

    if( usuario.uid ){
    this.itemsCollection.doc( usuario.uid ).set( usuario );
    }
    
  }

}
