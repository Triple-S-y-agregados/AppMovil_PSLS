import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.page.html',
  styleUrls: ['./imagen.page.scss'],
})
export class ImagenPage implements OnInit {
@Input() imagen: string;
@Input() index: number;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }

}
