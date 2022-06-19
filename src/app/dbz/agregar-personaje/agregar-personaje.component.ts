import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
})
export class AgregarPersonajeComponent{

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor( private dbzService: DbzService ){}
  
  agregarPersonaje(){
    // debugger;
    if( this.nuevo.nombre.trim().length === 0){ return; }
    // console.log(this.nuevo);
    // this.personajes.push(this.nuevo);
    // this.onNewPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo );
    this.nuevo = {nombre:'',poder: 0};
    // console.table(this.personajes);
  }
}
