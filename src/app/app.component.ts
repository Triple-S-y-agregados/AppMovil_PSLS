import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'sunny' },
    {title: 'Análisis', url: '/folder/Analisis', icon: 'cellular'},
    { title: 'Proyecto', url: '/folder/Proyecto', icon: 'information-circle' },
    { title: 'Registros', url: '/folder/Registros', icon: 'bookmark' },
    { title: 'Configuración', url: '/folder/Configuracion', icon: 'settings' },
  ];
  constructor() {}
}
