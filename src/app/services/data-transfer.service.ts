import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http'
import { CookiesService } from './cookie-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  ip: string = "192.168.1.77"
  port: string = "5000"
  manualMode: boolean = false;

  constructor(private client: HttpClient, private cookies: CookiesService) {
    let config: string = this.cookies.getCookie("config")
    if (config != "") {
      let data = this.cookies.getCookie("config").split(",");
      this.setIP(data[1]);
      if (data[0] == "true") {
        this.setManualMode(true);
      } else {
        this.setManualMode(false);
      }
    } else {
      config =
        //"manualMode:"+
        this.manualMode + "," +
        //"ipAddress:"+
        this.ip;
      this.cookies.setCookie("config", config, 1);
    }
  }
  //#region IP setter and getter

  setIP(new_ip: string) {
    this.ip = new_ip
    //alert( "La IP se a cambiado exitosamente a: " + this.ip )
  }

  getIP() {
    return this.ip;
  }
  //#endregion

  setManualMode(aux: boolean) {
    this.manualMode = aux;
  }

  getManualMode() {
    return this.manualMode;
  }

  getLastN(n: number) {
    return this.client.get("http://" + this.ip + ":" + this.port + "/read?num=" + n);
  }

  getFromOnward(datetime: string) {
    throw "Not implemented"
  }

  clearDB() {
    let status: boolean = false
    this.client.delete("http://" + this.ip + ":" + this.port + "/clear").subscribe(
      (data: any) => { status = data.Success },
      (error) => { status = false }
    )
    return status;
  }

}
