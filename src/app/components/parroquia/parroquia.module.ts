import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParroquiaRoutingModule } from './parroquia-routing.module';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { ParroquiaComponent } from './parroquia.component';
import { InicioComponent } from './inicio/inicio.component';
import { NabvarComponent } from './nabvar/nabvar.component';


@NgModule({
  declarations: [
    ParroquiaComponent,
    InicioComponent,
    NabvarComponent
  ],
  imports: [
    CommonModule,
    ParroquiaRoutingModule,
    CompartidosModule,
  
  ]
})
export class ParroquiaModule { }
