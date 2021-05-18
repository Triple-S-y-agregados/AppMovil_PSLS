import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pages = [
    {
    title: "Información",
    url: "/proyect-info"
  },
  {
    title: "Integrantes del Equipo",
    url: "/equipo"
  },
  {
    title: "Diagrama Eléctrico",
    url: "/diagramas"
  },
  {
    title: "Materiales",
    url: "/materiales"
  },
  {
    title: "Galería",
    url: "/galeria"
  }
]

}
