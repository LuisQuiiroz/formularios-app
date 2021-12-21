import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Juego[];
}
interface Juego {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = ''
  persona: Persona = {
    nombre: 'Luis',
    favoritos: [
      {id: 1, nombre: 'Minecraft'},
      {id: 2, nombre: 'Valorant'}
    ]
  }



  agregarJuego(){
    const nuevoFavorito: Juego = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego.trim() // es te trim() evita insertar espacios en blanco
    }
    if (this.nuevoJuego.trim() != '') { // este trim() valida que no se quiera agregar una cadena vacia
      
      this.persona.favoritos.push( {...nuevoFavorito } )
      this.nuevoJuego = '';
    }
  }

  eliminar(index: number){
    this.persona.favoritos.splice( index, 1 )
  }

  guardar(){
    console.log('Formulario posteado');
  }

  
}
