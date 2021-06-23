import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginsComponent } from './components/logins/logins.component';

const routes: Routes = [

  {path: '', redirectTo: 'logins', pathMatch: 'full'},
  {path: "logins", component: LoginsComponent},
  {path: "parroquia", loadChildren: () => import ('./components/parroquia/parroquia.module').then(x => x.ParroquiaModule)},

  {path: '**', redirectTo: 'logins', pathMatch: 'full'},





];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
