import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
 
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

  public appPages = [
    {title: 'Analisis', url: '/folder/Analisis', icon: 'cellular'},
    { title: 'Proyecto', url: '/folder/Proyecto', icon: 'information-circle' },
    { title: 'Registros', url: '/folder/Registros', icon: 'bookmark' },
    { title: 'Configuracion', url: '/folder/Configuracion', icon: 'settings' },
  ];

}
