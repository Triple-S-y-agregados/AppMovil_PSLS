import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sabiasque',
  templateUrl: './sabiasque.page.html',
  styleUrls: ['./sabiasque.page.scss'],
})
export class SabiasquePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }

}
