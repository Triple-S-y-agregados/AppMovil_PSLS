import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SabiasquePage } from '../pages/sabiasque/sabiasque.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  constructor(private modalController: ModalController) { }

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

  async abrirModal() {
    const modal = await this.modalController.create({
      component: SabiasquePage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

}
