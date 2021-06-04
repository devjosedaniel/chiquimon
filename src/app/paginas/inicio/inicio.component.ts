import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  disabled = false;
  textoError!: string;
  nombre = 'Omar Rodriguez';
  constructor(private loginsrv: LoginService) {
    console.log('se cargo el constructor de la pagina');
  }

  ngOnInit(): void {
    console.log('pagina iniciada');
  }
  ejecutar(): void {
    this.disabled = true;
    this.nombre = 'Jose Daniel';
    console.log('le diste click al boton');
    this.loginsrv.login().subscribe(res => {
      console.log('salio bien la api');
    }, err => {
      console.log(err);
      this.textoError = err.error.message;
      console.log('salio mal la api');
    });
  }
}
