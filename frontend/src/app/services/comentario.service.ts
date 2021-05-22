import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentarios';

@Injectable({
  providedIn: 'root'
})

export class ComentarioService {
  
  myAppUrl='https://localhost:44366/';
  myApiUrl='api/tasks/';
  constructor(private http :HttpClient) { }

  getComentarios() : Observable<any>{
    debugger;
   return this.http.get(this.myAppUrl+this.myApiUrl);
  }
  getTask(id : number) : Observable<any>{
    debugger;
   return this.http.get(this.myAppUrl+this.myApiUrl+id);
  }
  addtask(comentario: Comentario) :Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl,comentario);
  }
  deleteTask(id : number) : Observable<any> {
    return this.http.delete(this.myAppUrl+this.myApiUrl+id);
  }

  edit(id:number,comentario :Comentario) : Observable<any>{
    return this.http.put(this.myAppUrl+this.myApiUrl+id,comentario);

  }



  
}

