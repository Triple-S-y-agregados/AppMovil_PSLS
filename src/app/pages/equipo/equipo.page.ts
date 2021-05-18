import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
})
export class EquipoPage implements OnInit {

  microprocesadores=[
    "Andrik de la Cruz Martínez",
    "Edson Yael García Silva",
    "Sofía Alejandra Gaytán Díaz",
    "Vicente Garza Reyna",
    "Silvia Ivonne González Flores",
    "Salvador Armando Hernández García"
  ]

  sistemas_embebidos=[
    "Andrik de la Cruz Martinez",
    "José Raul Evangelista Mendoza",
    "Edson Yael García Silva",
    "Sofía Alejandra Gaytán Díaz",
    "Silvia Ivonne González Flores",
    "Salvador Armando Hernández García"
  ]

  constructor() { }

  ngOnInit() {
  }

}
