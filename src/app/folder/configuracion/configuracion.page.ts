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
  public manualMode: boolean = false;

  constructor( 
    private dtService: DataTransferService,
    private alertCtrl: AlertController, private cookies: CookiesService ) { }

  // Cookie format
  // config = "{ \"manualMode\":false, \"ipAddress\":\"0.0.0.0\" }";
  ngOnInit() { 
    this.ip = this.dtService.getIP();
    this.modificarCookie();
    let allCookies = document.cookie;
    alert(allCookies);
    this.leerCookie();
  }

  modificarCookie(){
    let config: string = 
      //"manualMode:"+
      this.manualMode+","+
      //"ipAddress:"+
      this.ip;
    this.cookies.setCookie("config", config, 1);
  }

  leerCookie(){
    let config: string = this.cookies.getCookie("config");
    let data: string[] = config.split(",");
    alert("Modo Manual: " + data[0] + "\nIP Address: " + data[1]);
  }

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
