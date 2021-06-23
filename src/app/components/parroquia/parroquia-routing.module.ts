import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ParroquiaComponent } from './parroquia.component';

const routes: Routes = [

{path: '', component: ParroquiaComponent, children: [

  {path: '', component: InicioComponent },
  
  {path: '', component: InicioComponent },
  




]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParroquiaRoutingModule { }
