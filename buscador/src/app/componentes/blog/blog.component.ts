import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  formulario:FormGroup;
  submited = false
  posts = []

  dateTime: number = Date.now();

  constructor() {

  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'entrada': new FormControl('', [Validators.required,Validators.maxLength(30), Validators.minLength(10)])
    })
  }

  guardar() {
    //console.log(this.formulario.value)
    //console.log(this.formulario.controls['nombre'].errors?.minlength)
    this.submited = true;
    if(this.formulario.get('nombre').valid && this.formulario.get('entrada').valid){
      this.posts.push(
        {nombre: this.formulario.value["nombre"], entrada: this.formulario.value["entrada"]}
      )
      this.submited = false;
    }
    //console.log(this.posts[0].entrada)
    //console.log(this.posts[0].nombre)

    
  }

}
