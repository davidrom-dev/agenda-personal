import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentarios';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-add-edit-list',
  templateUrl: './add-edit-list.component.html',
  styleUrls: ['./add-edit-list.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
action = 'Add';
id = 0;
agregarComentario: FormGroup;
comentario : Comentario | undefined;
volverUrl : string;
  constructor(private fb:FormBuilder,
    private agregarService : ComentarioService,
    private router : Router,
    private aRoute:ActivatedRoute) {
    this.agregarComentario = this.fb.group({
     titulo: ['',Validators.required],
     creador: ['',Validators.required],
     texto: ['',Validators.required],
  }

    )
    this.id = + this.aRoute.snapshot.paramMap.get('id')!;
    } 

   
  ngOnInit(): void {
    this.isEdit();

  }
  isEdit(){
    if(this.id !==0){
      this.action= 'Edit';
      this.agregarService.getTask(this.id).subscribe(
        data =>{
          this.agregarComentario.patchValue({
            titulo: data.titulo,
            texto: data.texto,
            creador: data.creador,
           
          }
            
          )
        }
      )
    }

  }
  agregarEditarTarea(){
debugger;
    if(this.id == undefined){
      const comentario : Comentario ={
        titulo: this.agregarComentario.get('titulo')?.value,
        creador: this.agregarComentario.get('creador')?.value,
        texto: this.agregarComentario.get('texto')?.value,
        fecha: new Date
      }
      debugger;
      this.agregarService.addtask(comentario).subscribe(
  
        data =>{
          
          this.router.navigate(['/']);
          console.log(data);
        }
      )

      
    }else{
      const comentario : Comentario ={
        id: this.id,
        titulo: this.agregarComentario.get('titulo')?.value,
        creador: this.agregarComentario.get('creador')?.value,
        texto: this.agregarComentario.get('texto')?.value,
        fecha: new Date
      }
      this.agregarService.edit(this.id,comentario).subscribe( data =>{
        this.router.navigate(['/']);

      }
        )
    }
  
  }


 

}
  
  

