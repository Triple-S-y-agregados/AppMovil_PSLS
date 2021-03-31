import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  intensidad = 93;
  angulo1 = 180;
  angulo2 = 90;

  constructor() { }

  ngOnInit() {
  }

}
