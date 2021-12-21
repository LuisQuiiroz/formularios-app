import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre'      : new FormControl('RTX 4080 Ti'),
  //   'precio'      : new FormControl(1500),
  //   'existencias' : new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({
    // nombre: ['contenidoInput', validadoresSincronos(a tiempo real), ValidadoresAsincronos],
    nombre:       [ null, [ Validators.required, Validators.minLength(3)]],
    precio:       [ null, [ Validators.required, Validators.min(0) ] ],
    existencias:  [ null, [ Validators.required, Validators.min(0) ] ]
  })

  // Servicio FormBuilder
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    // Establece un valor a todos los campos, no se puede omitir ningun campo porque revienta la aplicación
    // this.miFormulario.setValue({})

    this.miFormulario.reset({
      nombre: 'RTX 4080Ti',
      precio: 1500
    })
      
  }

  campoNoValido(campo: string){
    return this.miFormulario.controls[ campo ].errors && this.miFormulario.controls[ campo ].touched
  }
  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched(); // Toca todos los campos disponibles dentro de miFormulario
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset(); // Resetea todos los campos de miFormulario al presionar 'Guardar'
  }

}
