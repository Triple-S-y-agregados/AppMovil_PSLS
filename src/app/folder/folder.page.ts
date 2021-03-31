import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true
  };

  constructor() { }

  ngOnInit() {
  }

  public appPages = [
    {
      title: 'Analisis',
      url: '/folder/Analisis',
      icon: 'cellular',
      description: "Descripción de Analisis"
    },
    {
      title: 'Proyecto',
      url: '/folder/Proyecto',
      icon: 'information-circle',
      description: "Descripcion de Proyecto"
    },
    {
      title: 'Registros',
      url: '/folder/Registros',
      icon: 'bookmark',
      description: "Descripcion de Registros"
    },
    {
      title: 'Configuracion',
      url: '/folder/Configuracion',
      icon: 'settings',
      description: "Descripcion de Configuración"
    },
  ];

}
