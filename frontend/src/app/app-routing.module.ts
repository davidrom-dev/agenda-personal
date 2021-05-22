import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarComentarioComponent } from './component/add-edit-homework/add-edit-list.component';
import { ListComentariosComponent } from './component/list-comentarios/task-list.component';
import { VerComponentComponent } from './component/ver-component/ver-component.component';





const routes: Routes = [
  { path:'',component:ListComentariosComponent},
  { path:'agregar',component:AgregarEditarComentarioComponent},
  { path:'editar/:id',component:AgregarEditarComentarioComponent},
  { path:'ver/:id',component:VerComponentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
