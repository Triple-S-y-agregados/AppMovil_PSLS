import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Record } from 'src/app/classes/Record';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  voltaje = NaN;
  angulo1 = NaN;
  angulo2 = NaN;
  manualMode: boolean;

  constructor(private dtService: DataTransferService) { }

  ngOnInit() {
    this.manualMode = this.dtService.getManualMode();
    this.dtService.getLastN(1).subscribe(
      (data: Record[])=> {
        this.voltaje = data[0].voltage;
      },
      (error)=> {
        alert("No se pudo conectar a la API, verifique que la dirección ip sea correcta y que esta esté conectada");
        console.error(error);
      }
    );
  }

}
