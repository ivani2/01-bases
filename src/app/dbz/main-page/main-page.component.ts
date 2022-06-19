import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})

export class MainPageComponent {
  
  nuevo: Personaje = {
    nombre: 'Roshi',
    poder: 69
  }

  // get personajes(): Personaje[] {
  //   return this.DbzService.personajes;
  // }

  // agregarNuevoPersonaje(nuevoPersonaje: Personaje){
  //   // console.log(nuevoPersonaje);
  //   this.personajes.push(nuevoPersonaje);
  //   // console.table(this.personajes);
  // }

  constructor(){}
}
