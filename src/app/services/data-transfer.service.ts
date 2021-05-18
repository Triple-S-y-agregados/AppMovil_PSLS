import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http'
import { CookiesService } from './cookie-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  ip: string = "192.168.0.6"
  port: string = "44388"

  constructor(private client: HttpClient, private cookies: CookiesService) {
    let config: string = this.cookies.getCookie("config")
    if (config != "") {
      let data = this.cookies.getCookie("config").split(",");
      this.setIP(data[1]);
      this.setPort(data[0]);
    } else {
      config =
        //"manualMode:"+
        this.port + "," +
        //"ipAddress:"+
        this.ip;
      this.cookies.setCookie("config", config, 1);
    }
  }
  //#region IP + Port setter and getter

  setIP(new_ip: string) {
    this.ip = new_ip
    //alert( "La IP se a cambiado exitosamente a: " + this.ip )
  }

  getIP() {
    return this.ip;
  }

  setPort(new_port: string) {
    this.port = new_port
    //alert( "La IP se a cambiado exitosamente a: " + this.ip )
  }

  getPort() {
    return this.port;
  }
  //#endregion

  getLastN(n: number) {
    return this.client.get("http://" + this.ip + ":" + this.port + "/records/" + n);
  }

  getAngles() {
    return this.client.get("http://" + this.ip + ":" + this.port + "/angles");
  }

  clearDB() {
    let status: boolean = false
    this.client.delete("http://" + this.ip + ":" + this.port + "/records").subscribe(
      (data: any) => { status = data.Success },
      (error) => { status = false }
    )
    return status;
  }

}
