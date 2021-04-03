import { Component, Input, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  @Input()
  public ip: string;

  constructor( 
    private dtService: DataTransferService,
    private alertCtrl: AlertController ) { }

  ngOnInit() { this.ip = this.dtService.getIP(); }

  saveIP(){
    console.log(this.ip)
    if (/^\d+\.\d+\.\d+\.\d+$/.test(this.ip)){
      this.dtService.setIP( this.ip );
    } else {
      alert("La IP no es válida")
    }
  }

  async clearDB(){
    // Cuadro de confirmación
    const alert = await this.alertCtrl.create({
      header: "¿Seguro que desea continuar?",
      message: "Si continua se borraran todos los datos de la base de datos",
      buttons: [
        { text: 'Cancelar', role:'cancel', cssClass: 'primary'},
        { text: 'Confirmar', cssClass: 'danger',
          handler: () => {
            this.dtService.clearDB()
          }
        },
      ]
    });

    await alert.present()
  }

}
