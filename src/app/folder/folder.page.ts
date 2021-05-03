import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  public pages = [
    {
      title: 'Análisis',
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
      title: 'Configuración',
      url: '/folder/Configuracion',
      icon: 'settings',
      description: "Descripcion de Configuración"
    },
  ];

}
