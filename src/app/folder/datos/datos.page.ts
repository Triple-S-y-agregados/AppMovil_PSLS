import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  intensidad = 93;
  angulo1 = 180;
  angulo2 = 90;
  manualMode: boolean;

  constructor(private dtService: DataTransferService) { }

  ngOnInit() {
    this.manualMode = this.dtService.getManualMode();
  }

}
