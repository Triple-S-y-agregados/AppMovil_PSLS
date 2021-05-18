import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Record } from 'src/app/classes/Record';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  voltaje = NaN;
  angulo1 = NaN;
  angulo2 = NaN;

  constructor(private dtService: DataTransferService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.dtService.getLastN(1).subscribe(
      (data: Record[])=> {
        this.voltaje = data[0].voltage;
      },
      (error)=> {
        this.invalid();
        console.error(error);
      }
    );
  }

  async invalid() {
    const alert = await this.alertCtrl.create({
      header: 'Conexión Fallida',
      message: 'No se pudo conectar a la API, verifique que la dirección IP sea correcta y que esta esté conectada',
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
