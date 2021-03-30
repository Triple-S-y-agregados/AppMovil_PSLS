import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor( private client: HttpClient ) {}


}
