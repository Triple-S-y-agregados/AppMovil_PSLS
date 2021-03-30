import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { KVPair } from 'src/app/classes/KVPair'

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private _storage: Storage | null = null;

  constructor(private storage : Storage) { 
    this.initializeStorage();
   }

  async initializeStorage(){
    const storage = await this.storage.create()
    this._storage = storage;
  }

  public set(key: string, value:string){
    this._storage.set(key, value)
  }

  public remove(key: string){
    this._storage.remove(key)
  }

  public setArray( pairArray: KVPair[] ){
    
    for (let kv of pairArray){
      this.set( kv.key, kv.value )
    }
  }
  
  public removeArray(keys: string[]){
    keys.forEach(k => this.remove(k));
  }

  public length(){ return this._storage.length()}

  public returnStorage():Storage{ return this._storage;}

}
