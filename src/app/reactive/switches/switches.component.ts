import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required],
    notificaciones: [ true, Validators.required], // requerid es que tenga cualquier valor
    terminos: [ false, Validators.requiredTrue] // requiredTrue es que tiene que ser true
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      terminos: false
    });

    // this.miFormulario.get('terminos')?.valueChanges.subscribe( newValue => {
    //   console.log( newValue );
    // });

    this.miFormulario.valueChanges.subscribe( ({ terminos, ...rest}) => {
      // console.log( form );
      // delete form.terminos;
      this.persona = rest;
    });
  }

  


  guardar(){
    const formValue = {...this.miFormulario.value}; // operador spread hace una copia de miFormulario
    delete formValue.terminos;
    console.log(formValue)

    this.persona = formValue;
  }
}
