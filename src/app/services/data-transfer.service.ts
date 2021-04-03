import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http'
import { IntensityData } from '../classes/IntensityData';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  ip: string = "0.0.0.0"
  port: string = "5000"

  constructor( private client: HttpClient ) {}
  //#region IP setter and getter
  setIP( new_ip: string ) {
    console.log("Hello")
    this.ip = new_ip
    alert( "La IP se a cambiado exitosamente a: " + this.ip )
  }
  
  getIP( ) { return this.ip; }
  //#endregion

  //#region Get Database Values

  getLastN( n: number ): IntensityData[] {
    let result: IntensityData[] = null;
    this.client.get( "http://" + this.ip +":" + this.port + "/read?num=" + n).subscribe(
      (data: IntensityData[])=>{result = data},
      (error)=>{console.error(error)}
    )
    return result;
  }

  getFromOnward( datetime: string ) {
    throw "Not implemented"
  }
  //#endregion

  clearDB(  ){
    let status :boolean = false
    this.client.delete( "http://" + this.ip + ":" + this.port + "/clear" ).subscribe(
      (data: any)=>{status = data.Success},
      (error) => {status = false}
    )
    return status;
  }

}
