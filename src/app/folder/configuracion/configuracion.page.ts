import { Component, Input, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service'
import { AlertController, ToastController } from '@ionic/angular'
import { CookiesService } from 'src/app/services/cookie-service.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  @Input()
  public ip: string;
  public port: string = "44388"; // TODO: Add some methd to set the Port

  constructor(
    private dtService: DataTransferService,
    private alertCtrl: AlertController, private cookies: CookiesService,
    private toastController: ToastController) { }

  // Cookie format
  // config = "{ \"manualMode\":false, \"ipAddress\":\"0.0.0.0\" }";
  ngOnInit() {
      this.port = this.dtService.getPort();
      this.ip = this.dtService.getIP();
      this.modificarCookie();
  }

  modificarCookie() {
    let config: string =
      //"port:"+
      this.port + "," +
      //"ipAddress:"+
      this.ip;
    this.cookies.setCookie("config", config, 1);
  }

  leerCookie() {
    let config: string = this.cookies.getCookie("config");
    let data: string[] = config.split(",");
    return data;
  }

  modificarData(data:string[]){
    this.dtService.ip = data[1];
    this.port = data[0];
  }

  saveIP() {
    console.log(this.ip)
    if (/^\d+\.\d+\.\d+\.\d+$/.test(this.ip)) {
      this.dtService.setIP(this.ip);
      this.dtService.setPort(this.port);
      this.changeInfo(this.ip, this.port);
      this.modificarCookie();
    } else {
      this.invalidIP(this.ip);
      this.ip = this.dtService.getIP();
      this.port = this.dtService.getPort();
    }
  }

  reset() {
    let data = this.leerCookie();
    this.ip = data[1];
    this.port = data[0];
  }

  async changeInfo(ip: string, port: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Dirección IP Aceptada',
      message: 'La dirección IP se a cambiado exitosamente a: ' + ip + '<br><br>'
      + 'El puerto se a cambiado exitosamente a: ' + port,
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
