import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentarios';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-ver-component',
  templateUrl: './ver-component.component.html',
  styleUrls: ['./ver-component.component.css']
})
export class VerComponentComponent implements OnInit {
  comentario : Comentario;
  volverUrl : string;
  constructor(private comentarioService : ComentarioService,
    private router : ActivatedRoute) { }
    img="";
  id:number;
  ngOnInit(): void {
   this.id= +this.router.snapshot.paramMap.get('id')!;
   this.getComentario();
  }
  
  getComentario(){
    debugger;
    this.comentarioService.getTask(this.id).subscribe( 
      data =>{
      this.comentario = data;
        console.log(this.comentario.texto);
      
    }
  )
}


}
