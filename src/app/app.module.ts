import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//rutas
import { AppRoutingModule } from './app-routing.module'







//componentes 

import { LoginsComponent } from './components/logins/logins.component';
import { CompartidosModule } from './components/compartidos/compartidos.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CompartidosModule,
    AppRoutingModule,

    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
