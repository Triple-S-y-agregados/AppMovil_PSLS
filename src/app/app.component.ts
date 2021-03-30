import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'sunny' },
    {title: 'Analisis', url: '/folder/Analisis', icon: 'cellular'},
    { title: 'Proyecto', url: '/folder/Proyecto', icon: 'information-circle' },
    { title: 'Registro', url: '/folder/Registro', icon: 'bookmark' },
    { title: 'Configuracion', url: '/folder/Configuracion', icon: 'settings' },
  ];
  constructor() {}
}
