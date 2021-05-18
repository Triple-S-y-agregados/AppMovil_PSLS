import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagenPage } from '../imagen/imagen.page';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  imagenes=[
    "imagen0.jpeg", 
    "imagen1.png", 
    "imagen2.jpeg",
    "imagen3.jpeg",
    "imagen4.jpeg",
    "imagen5.jpeg",
    "imagen6.jpeg",
    "imagen7.jpeg",
    "imagen8.jpeg",
    "imagen9.jpeg",
    "imagen10.jpeg",
    "imagen11.jpeg",
    "imagen12.jpeg",
    "imagen13.jpeg",
    "imagen14.jpeg",
    "imagen15.jpeg",
    "imagen16.jpeg",
    "imagen17.jpeg"
  ]

  async abrirModal(imagen: string, i: number) {
    const modal = await this.modalController.create({
      component: ImagenPage,
      cssClass: 'my-custom-class',
      componentProps:{
        imagen: imagen,
        index: i+1
      }
    });
    return await modal.present();
  }
}
