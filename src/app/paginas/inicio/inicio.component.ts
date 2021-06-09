import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {

  }

  clientes(): Cliente[] {
    return [
      { nombre: 'Jose daniel', apellido: 'Pozo', direccion: 'Sauces', edad: 27 },
      { nombre: 'Omar', apellido: 'ROdriguez', direccion: 'guasmo', edad: 27 },
      { nombre: 'DIna', apellido: 'Tene', direccion: 'Mucho lote', edad: 28 },
      { nombre: 'Cindy', apellido: 'Castello', direccion: 'Alborada', edad: 27 },
      { nombre: 'Jose daniel', apellido: 'Pozo', direccion: 'Sauces', edad: 27 },
      { nombre: 'Omar', apellido: 'ROdriguez', direccion: 'guasmo', edad: 27 },
      { nombre: 'DIna', apellido: 'Tene', direccion: 'Mucho lote', edad: 28 },
      { nombre: 'Cindy', apellido: 'Castello', direccion: 'Alborada', edad: 27 },
      { nombre: 'Jose daniel', apellido: 'Pozo', direccion: 'Sauces', edad: 27 },
      { nombre: 'Omar', apellido: 'ROdriguez', direccion: 'guasmo', edad: 27 },
      { nombre: 'DIna', apellido: 'Tene', direccion: 'Mucho lote', edad: 28 },
      { nombre: 'Cindy', apellido: 'Castello', direccion: 'Alborada', edad: 27 },
      { nombre: 'Jose daniel', apellido: 'Pozo', direccion: 'Sauces', edad: 27 },
      { nombre: 'Omar', apellido: 'ROdriguez', direccion: 'guasmo', edad: 27 },
      { nombre: 'DIna', apellido: 'Tene', direccion: 'Mucho lote', edad: 28 },
      { nombre: 'Cindy', apellido: 'Castello', direccion: 'Alborada', edad: 27 },
      { nombre: 'Jose daniel', apellido: 'Pozo', direccion: 'Sauces', edad: 27 },
      { nombre: 'Omar', apellido: 'ROdriguez', direccion: 'guasmo', edad: 27 },
      { nombre: 'DIna', apellido: 'Tene', direccion: 'Mucho lote', edad: 28 },
      { nombre: 'Cindy', apellido: 'Castello', direccion: 'Alborada', edad: 27 },
      { nombre: 'Jose daniel', apellido: 'Pozo', direccion: 'Sauces', edad: 27 },
      { nombre: 'Omar', apellido: 'ROdriguez', direccion: 'guasmo', edad: 27 },
      { nombre: 'DIna', apellido: 'Tene', direccion: 'Mucho lote', edad: 28 },
      { nombre: 'Cindy', apellido: 'Castello', direccion: 'Alborada', edad: 27 },
      { nombre: 'Jose daniel', apellido: 'Pozo', direccion: 'Sauces', edad: 27 },
      { nombre: 'Omar', apellido: 'ROdriguez', direccion: 'guasmo', edad: 27 },
      { nombre: 'DIna', apellido: 'Tene', direccion: 'Mucho lote', edad: 28 },
      { nombre: 'Cindy', apellido: 'Castello', direccion: 'Alborada', edad: 27 },
      { nombre: 'Jose daniel', apellido: 'Pozo', direccion: 'Sauces', edad: 27 },
      { nombre: 'Omar', apellido: 'ROdriguez', direccion: 'guasmo', edad: 27 },
      { nombre: 'DIna', apellido: 'Tene', direccion: 'Mucho lote', edad: 28 },
      { nombre: 'Cindy', apellido: 'Castello', direccion: 'Alborada', edad: 27 },
      { nombre: 'Jose daniel', apellido: 'Pozo', direccion: 'Sauces', edad: 27 },
      { nombre: 'Omar', apellido: 'ROdriguez', direccion: 'guasmo', edad: 27 },
      { nombre: 'DIna', apellido: 'Tene', direccion: 'Mucho lote', edad: 28 },
      { nombre: 'Cindy', apellido: 'Castello', direccion: 'Alborada', edad: 27 },
      { nombre: 'Jose daniel', apellido: 'Pozo', direccion: 'Sauces', edad: 27 },
      { nombre: 'Omar', apellido: 'ROdriguez', direccion: 'guasmo', edad: 27 },
      { nombre: 'DIna', apellido: 'Tene', direccion: 'Mucho lote', edad: 28 },
      { nombre: 'Cindy', apellido: 'Castello', direccion: 'Alborada', edad: 27 },
    ];
  }

  enviar(cliente: Cliente): void {
    console.log(cliente);
  }
}
