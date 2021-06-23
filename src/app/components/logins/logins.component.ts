import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
  form: FormGroup;
  loading =false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
  this.form=this.fb.group({

  usuario: ['', Validators.required],
  contrasena: ['', Validators.required],


  })
  


  }

  ngOnInit(): void {
  }

  ingresar(){

  const usuario = this.form.value.usuario;
  const password = this.form.value.contrasena;

  console.log(usuario);
  console.log(password);
    
    if (usuario == '1234' && password == '1234') {
    this.cargafalsa();

    }

    else{
          
      this.error();
      this.form.reset();
    }


  }

  error(){

    this._snackBar.open('usuario o contrase;a invalidos','intente nuevamente',{
      
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    });

  }

  cargafalsa(){


    this.loading = true;

    setTimeout(() => {
     //redirecionar
      this.router.navigate(["parroquia"]);
      
    }, 1500);
  }
  

}
