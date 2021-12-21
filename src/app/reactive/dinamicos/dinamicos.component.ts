import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {


  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      // this.fb.control('') // Es lo mismo que lo de abajo, nada más que resumido
      ['Minecraft', Validators.required ],
      ['Valorant', Validators.required ]
    ], Validators.required )
  })

  // nuevoFavorito: FormControl = new FormControl
  nuevoFavorito: FormControl = this.fb.control( '', Validators.required)




  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray; // obtiene favoritos y lo retorna como un FormArray
  }

  constructor( private fb: FormBuilder) { }


  campoNoValido( campo: string ){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched

  }

  agregarFavorito(){
    if ( this.nuevoFavorito.invalid ) { return; }
    
    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required) );
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required) );

    this.nuevoFavorito.reset();

  }

  borrar(index: number){
    this.favoritosArr.removeAt(index);
  }
  
  guardar(){
    if ( this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
  

}
