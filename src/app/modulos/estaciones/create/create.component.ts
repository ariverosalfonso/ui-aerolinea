import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AeropuertoModelo } from 'src/app/interfaces/aeropuerto';
import { AeropuertoService } from '../../../servicios/aeropuerto.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor( private aeropuertoService: AeropuertoService,
    private router: Router) { }
    listadoEstaciones: AeropuertoModelo[] = []

  ngOnInit(): void {
    this.getAllAeropuertos()

  }
  getAllAeropuertos(){
    this.aeropuertoService.getAll().subscribe((data: AeropuertoModelo[]) => {
      this.listadoEstaciones = data
      console.log(data)
    })
  }


}
