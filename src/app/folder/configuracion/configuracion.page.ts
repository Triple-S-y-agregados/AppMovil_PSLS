import { Component, Input, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service'
import { AlertController } from '@ionic/angular'
import { CookiesService } from 'src/app/services/cookie-service.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  @Input()
  public ip: string;
  public port: number = 44388; // TODO: Add some methd to set the Port
  public manualMode: boolean;

  constructor(
    private dtService: DataTransferService,
    private alertCtrl: AlertController, private cookies: CookiesService) { }

  // Cookie format
  // config = "{ \"manualMode\":false, \"ipAddress\":\"0.0.0.0\" }";
  ngOnInit() {
      this.manualMode = this.dtService.getManualMode();
      this.ip = this.dtService.getIP();
      this.modificarCookie();
  }

  modificarCookie() {
    let config: string =
      //"manualMode:"+
      this.manualMode + "," +
      //"ipAddress:"+
      this.ip;
    this.cookies.setCookie("config", config, 1);
  }

  leerCookie() {
    let config: string = this.cookies.getCookie("config");
    let data: string[] = config.split(",");
    //alert("Modo Manual: " + data[0] + "\nIP Address: " + data[1]);
    return data;
  }

  modificarData(data:string[]){
    this.dtService.ip = data[1];
    if (data[0] == "true") {
      this.dtService.manualMode = true;
    } else {
      this.dtService.manualMode = false;
    }
  }

  saveManualMode() {
    //this.changeManualMode();
    this.dtService.setManualMode(this.manualMode);
    this.modificarCookie();
  }

  saveIP() {
    console.log(this.ip)
    if (/^\d+\.\d+\.\d+\.\d+$/.test(this.ip)) {
      this.dtService.setIP(this.ip);
      this.changeIP(this.ip);
      this.modificarCookie();
    } else {
      this.invalidIP(this.ip);
      this.ip = this.dtService.getIP();
    }
  }

  reset() {
    let data = this.leerCookie();
    this.ip = data[1];
  }

  verificar() {
    if (/^\d+\.\d+\.\d+\.\d+$/.test(this.ip)) {
      console.log("correcto")
    } else {
      console.log("incorrecto")
    }
  }

  async changeIP(ip: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Dirección IP Aceptada',
      message: 'La IP se a cambiado exitosamente a: ' + ip,
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async changeManualMode() {
    var estado: string;
    if (this.manualMode) {
      estado = "Activado";
    } else {
      estado = "Desactivado";
    }
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Modo Manual ' + estado,
      message: 'El modo manual se encuentra: ' + estado.toLowerCase(),
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async invalidIP(ip: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Dirección IP Incorrecta',
      message: 'La dirección IP ' + ip + " no es válida.",
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async clearDB() {
    // Cuadro de confirmación
    const alert = await this.alertCtrl.create({
      header: "¿Seguro que desea continuar?",
      message: "Si continua se borraran todos los datos de la base de datos",
      buttons: [
        {
          text: 'Confirmar', cssClass: 'danger',
          handler: () => {
            this.dtService.clearDB()
          }
        },
        { text: 'Cancelar', role: 'cancel', cssClass: 'primary' },
      ]
    });
    await alert.present()
  }

}
