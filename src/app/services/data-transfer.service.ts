import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http'
import { IntensityData } from '../classes/IntensityData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  ip: string = "192.168.1.77"
  port: string = "5000"

  constructor( private client: HttpClient ) {}
  //#region IP setter and getter
  setIP( new_ip: string ) {
    this.ip = new_ip
    alert( "La IP se a cambiado exitosamente a: " + this.ip )
  }
  
  getIP( ) { return this.ip; }
  //#endregion

  
  getLastN( n: number ) {
    return this.client.get( "http://" + this.ip +":" + this.port + "/read?num=" + n);
  }

  getFromOnward( datetime: string ) {
    throw "Not implemented"
  }

  clearDB(  ){
    let status :boolean = false
    this.client.delete( "http://" + this.ip + ":" + this.port + "/clear" ).subscribe(
      (data: any)=>{status = data.Success},
      (error) => {status = false}
    )
    return status;
  }

}
