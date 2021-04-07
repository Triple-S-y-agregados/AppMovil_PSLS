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
  @Input() public ip: string;
  @Input() public manualMode: boolean = false;
  private pattern : RegExp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/

  constructor( 
    private dtService: DataTransferService,
    private alertCtrl: AlertController, private cookies: CookiesService
  ) { }

  // Cookie format
  // config = "[Modo Manual (boolean->string)], [Dirección IP (string)]";
  ngOnInit() {
    let cookie = this.leerCookie();
    this.ip = cookie.ip
    this.manualMode = cookie.manualMode === "true"
  }

  ngOnDestroy() { }

  modificarCookie(){
    let config: string = this.manualMode + "," + this.ip;
    this.cookies.setCookie("config", config, 10);
  }

  leerCookie(){
    let config: string = this.cookies.getCookie("config");
    let data: string[] = config.split(",");
    return { "manualMode": data[0], "ip": data[1] }
  }

  saveConfig(){
    if ( this.pattern.test(this.ip) ){
      this.dtService.setIP( this.ip );
      this.modificarCookie();
    } else {
      alert("La IP no es válida")
    }
  }

  async clearDB() {
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
