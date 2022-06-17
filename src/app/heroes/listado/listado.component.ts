import { ConditionalExpr } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {
  // heroes: string[] = ['Spiderman','Thor','Batman','DrManhattan', 'Scarlett Witch'];
  // heroesBorrados: string[] = [];

  // borrarHeroe(){
  //   let heroeBorrado = this.heroes.shift();
  //   if(heroeBorrado) this.heroesBorrados.push(heroeBorrado);
  // }

  // noHayHeroesBorrados(): boolean{
  //   if(this.heroesBorrados.length>0){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  heroes: string[] = ['Spiderman','Thor','Batman','DrManhattan', 'Scarlett Witch'];
  heroesBorrados: string[] = [];

  borrarHeroe(){
    let heroeBorrado = this.heroes.shift();
    if(heroeBorrado) this.heroesBorrados.push(heroeBorrado);
  }

  noHayHeroesBorrados(): boolean{
    if(this.heroesBorrados.length>0){
      return true;
    }
    else{
      return false;
    }
  }

}
